import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JobAd } from 'src/entities';
import { In, Like, Repository } from 'typeorm';
import {
  CreateJobAdDto,
  SearchJobAdDto,
  UpdateJobAdDto,
} from '../dto/job-ad.dto';
import { RuntimeException } from '@nestjs/core/errors/exceptions';

@Injectable()
export class JobAdService {
  constructor(
    @InjectRepository(JobAd) private readonly jobAdRepo: Repository<JobAd>,
  ) {}

  getJobAds() {
    return this.jobAdRepo.find();
  }

  createJobAd(createJobAdDto: CreateJobAdDto) {
    const newJobAd = this.jobAdRepo.create(createJobAdDto);
    return this.jobAdRepo.save(newJobAd);
  }

  findJobAdById(id: number) {
    return this.jobAdRepo.findOneBy({ id: id }).then((jobAd: JobAd) => {
      if (jobAd === null) {
        throw new NotFoundException('Cannot find job ' + 'ad with id ' + id);
      }

      return jobAd;
    });
  }

  updateJobAd(id: number, updateJobAdDto: UpdateJobAdDto) {
    return this.jobAdRepo
      .findOneByOrFail({ id: id })
      .then((job: JobAd) => {
        JobAdService.checkJobAdForUpdate(job, updateJobAdDto);

        return this.jobAdRepo.update({ id }, updateJobAdDto).then((_) => {
          if (_.affected > 0) return updateJobAdDto;
        });
      })
      .catch((e: Error) => {
        if (e instanceof NotFoundException)
          throw new NotFoundException('Cannot find job ad with ' + 'id ' + id);

        if (e instanceof RuntimeException) {
          throw new BadRequestException(e.message);
        }
      });
  }

  async findAll(searchJobDto: SearchJobAdDto) {
    const limit = searchJobDto.limit || 10;
    const offset = searchJobDto.offset || 0;
    const title = searchJobDto.title || '';
    const statuses = searchJobDto.status;

    const [result, total] = await this.jobAdRepo.findAndCount({
      where: {
        title: Like('%' + title + '%'),
        status: !statuses || statuses.length == 0 ? undefined : In(statuses),
      },
      order: { id: 'ASC' },
      take: limit,
      skip: offset,
    });

    return {
      data: result,
      count: total,
    };
  }

  async getStatistic() {
    const draft = await this.jobAdRepo.countBy({ status: 'draft' });
    const published = await this.jobAdRepo.countBy({ status: 'published' });
    const archived = await this.jobAdRepo.countBy({ status: 'archived' });

    return {
      draft,
      published,
      archived,
    };
  }

  private static checkJobAdForUpdate(job: JobAd, updateJobDto: UpdateJobAdDto) {
    if (
      job.status === 'draft' &&
      !['draft', 'published', 'archived'].includes(updateJobDto.status)
    ) {
      throw new RuntimeException(
        "'" + updateJobDto.status + "'" + ' is not correct job ad status',
      );
    }

    if (job.status === 'published' && updateJobDto.status === 'draft') {
      throw new RuntimeException(
        'Published job ad cannot be changed to draft status',
      );
    }

    if (
      job.status === 'archived' &&
      ['draft', 'published'].includes(updateJobDto.status)
    ) {
      throw new RuntimeException('Archived job ad status cannot be updated');
    }
  }
}
