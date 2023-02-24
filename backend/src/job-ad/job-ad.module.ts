import { Module } from '@nestjs/common';
import { JobAdController } from './controllers/job-ad.controller';
import { JobAdService } from './services/job-ad.service';

@Module({
  controllers: [JobAdController],
  providers: [JobAdService],
})
export class JobAdModule {}
