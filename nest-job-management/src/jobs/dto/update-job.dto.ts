import { IsEnum } from 'class-validator';
import { JobStatus } from '../jobs-status.enum';

export class updateJobStatusDto {
  @IsEnum(JobStatus)
  status: JobStatus;
}
