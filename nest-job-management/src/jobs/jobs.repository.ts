import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobRepository extends Repository<Job> {
  constructor(private dataSource: DataSource) {
    super(Job, dataSource.createEntityManager());
  }
}
