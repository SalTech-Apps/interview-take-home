import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  // Delete,
  // Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { createJobDto } from './dto/create-job.dto';
import { filterDto } from './dto/get-job.dto';
// import { updateJobStatusDto } from './dto/update-job.dto';
import { Job } from './job.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('jobs')
@UseGuards(AuthGuard())
export class JobsController {
  constructor(private jobsService: JobsService) {}

  @Get()
  getJobs(
    @Query() jobFilterDto: filterDto,
    @GetUser() user: User,
  ): Promise<Job[]> {
    return this.jobsService.getJobs(jobFilterDto, user);
  }
  @Get('/:id')
  getJobById(@Param('id') id: string, @GetUser() user: User): Promise<Job> {
    return this.jobsService.getJobsById(id, user);
  }

  // @Delete('/:id')
  // deleteJob(@Param('id') id: string, @GetUser() user: User): Promise<string> {
  //   return this.jobsService.deleteJob(id, user);
  // }

  // @Patch('/:id')
  // updateJobStatus(
  //   @Param('id') id: string,
  //   @Body() updateStatusDto: updateJobStatusDto,
  //   @GetUser() user: User,
  // ): Promise<Job> {
  //   return this.jobsService.updateJobStatus(id, updateStatusDto, user);
  // }

  @Post()
  createJobs(
    @Body() CreateJobDto: createJobDto,
    @GetUser() user: User,
  ): Promise<Job> {
    return this.jobsService.createJobs(CreateJobDto, user);
  }
}
