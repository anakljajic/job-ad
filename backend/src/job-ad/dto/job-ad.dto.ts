import {
  ArrayNotEmpty,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { JobAd } from '../../entities';
import { Optional } from '@nestjs/common';

export class CreateJobAdDto extends PartialType(JobAd) {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @MinLength(10)
  @IsString()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  skills: string[];

  @IsNotEmpty()
  @IsString()
  @IsIn(['draft', 'published'], {
    message: (validationArguments) =>
      validationArguments.value === 'archived'
        ? "A job ad can be only created with 'draft' or 'published' status"
        : "'" + validationArguments.value + "'" + ' status does not exist',
  })
  status: 'draft' | 'published' | 'archived';
}

export class UpdateJobAdDto extends PartialType(JobAd) {
  @IsNotEmpty()
  @IsString()
  @Optional()
  title?: string;

  @IsNotEmpty()
  @MinLength(10)
  @IsString()
  @Optional()
  description?: string;

  @IsArray()
  @ArrayNotEmpty()
  @Optional()
  skills?: string[];

  @IsNotEmpty()
  @IsIn(['draft', 'published', 'archived'], {
    message: (validationArguments) =>
      "'" + validationArguments.value + "'" + ' status does not exist',
  })
  @IsString()
  @Optional()
  status?: 'draft' | 'published' | 'archived';
}

export class SearchJobAdDto {
  title?: string;
  status?: string[];
  limit: number;
  offset: number;
}
