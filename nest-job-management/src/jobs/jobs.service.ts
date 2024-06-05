import { Injectable, NotFoundException } from '@nestjs/common';
import { JobStatus } from './jobs-status.enum';
import { v4 as uuid } from 'uuid';
import { createJobDto } from './dto/create-job.dto';
import { filterDto } from './dto/get-job.dto';
// import { updateJobStatusDto } from './dto/update-job.dto';
import { JobRepository } from './jobs.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './job.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(JobRepository)
    private jobsRepository: JobRepository,
  ) {}

  async getJobs(jobfilter: filterDto, user: User): Promise<Job[]> {
    const { status, search } = jobfilter;
    const query = this.jobsRepository.createQueryBuilder('job');
    query.where({ user });

    if (status) {
      const lowerStatus = status.toLowerCase();
      query.andWhere('(LOWER(job.status) = LOWER(:status))', {
        status: lowerStatus,
      });
    }

    if (search) {
      query.andWhere(
        '(LOWER(job.title) LIKE LOWER(:search) OR LOWER(job.description) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const jobs = await query.getMany();
    return jobs;
  }

  async getJobsById(id: string, user: User): Promise<Job> {
    const job = await this.jobsRepository.findOne({ where: { id, user } });

    if (!job) {
      throw new NotFoundException(`could not find job with id: ${id}`);
    }
    return job;
  }

  // async updateJobStatus(
  //   id: string,
  //   updateJobStatusDto: updateJobStatusDto,
  //   user: User,
  // ): Promise<Job> {
  //   const { status } = updateJobStatusDto;
  //   const job = await this.getJobsById(id, user);
  //   job.status = status;
  //   await this.jobsRepository.save(job);
  //   return job;
  // }

  // async deleteJob(id: string, user: User): Promise<string> {
  //   const found = await this.jobsRepository.delete({ id, user });
  //   if (found.affected === 0) {
  //     throw new NotFoundException(`could not find job with id: ${id}`);
  //   }
  //   return `Job with id ${id} deleted successfully`;
  // }

  async createJobs(CreateJobDto: createJobDto, user: User): Promise<Job> {
    const { title, description } = CreateJobDto;
    const job = this.jobsRepository.create({
      id: uuid(),
      title: title,
      description: description,
      status: JobStatus.OPEN,
      user,
    });
    await this.jobsRepository.save(job);
    return job;
  }
}
