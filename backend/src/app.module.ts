import { Module } from '@nestjs/common';
import { JobAdModule } from './job-ad/job-ad.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), JobAdModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
