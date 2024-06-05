import { Module } from '@nestjs/common';
import { JobsController } from './job.controller';
import { JobsService } from './jobs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobRepository } from './jobs.repository';
import { Job } from './job.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Job]), AuthModule],
  controllers: [JobsController],
  providers: [JobsService, JobRepository],
})
export class JobsModule {}
