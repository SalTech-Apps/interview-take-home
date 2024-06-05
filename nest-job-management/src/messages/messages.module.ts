import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { MessageRepository } from './messages.repository';
import { Message } from './message.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRepository, Message])],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
