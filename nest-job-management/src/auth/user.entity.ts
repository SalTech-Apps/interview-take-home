import { Job } from 'src/jobs/job.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Message } from 'src/messages/message.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Job, (job) => job.user, { eager: true })
  jobs: Job[];

  @OneToMany(() => Message, (message) => message.sender, { eager: false })
  sentMessages: Message[];

  @OneToMany(() => Message, (message) => message.receiver, { eager: false })
  receivedMessages: Message[];
}
