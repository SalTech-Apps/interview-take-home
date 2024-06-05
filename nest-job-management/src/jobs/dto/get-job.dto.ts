import { IsEnum, IsOptional, IsString } from 'class-validator';
import { JobStatus } from '../jobs-status.enum';

export class filterDto {
  @IsEnum(JobStatus)
  @IsOptional()
  status: JobStatus;

  @IsString()
  @IsOptional()
  search: string;
}
