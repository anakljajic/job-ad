import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JobAdService } from '../services/job-ad.service';
import {
  CreateJobAdDto,
  SearchJobAdDto,
  UpdateJobAdDto,
} from '../dto/job-ad.dto';

@Controller('/api/job-ads')
export class JobAdController {
  constructor(private readonly jobAdService: JobAdService) {}

  @Get()
  getJobAds() {
    return this.jobAdService.getJobAds();
  }

  @Get(':id')
  findJobAdById(@Param('id', ParseIntPipe) id: number) {
    return this.jobAdService.findJobAdById(id);
  }

  @Post('add')
  @UsePipes(ValidationPipe)
  createJobAd(@Body() createJobDto: CreateJobAdDto) {
    return this.jobAdService.createJobAd(createJobDto);
  }

  @Post('search')
  findAll(@Body() searchJobDto: SearchJobAdDto) {
    return this.jobAdService.findAll(searchJobDto);
  }

  @Put(':id')
  updateJobAd(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateJobDto: UpdateJobAdDto,
  ) {
    return this.jobAdService.updateJobAd(id, updateJobDto);
  }
}
