import { Module } from '@nestjs/common';
import { JobAdController } from './controllers/job-ad.controller';
import { JobAdService } from './services/job-ad.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobAd } from '../entities';

@Module({
  imports: [TypeOrmModule.forFeature([JobAd])],
  controllers: [JobAdController],
  providers: [JobAdService],
})
export class JobAdModule {}
