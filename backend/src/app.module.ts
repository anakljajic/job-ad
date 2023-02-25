import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { HttpModule } from '@nestjs/axios';
import { JobAdModule } from './job-ad/job-ad.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    JobAdModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
