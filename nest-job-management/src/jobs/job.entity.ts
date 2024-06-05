import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { JobStatus } from './jobs-status.enum';
import { User } from 'src/auth/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: JobStatus;

  @ManyToOne((_type) => User, (user) => user.jobs, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
