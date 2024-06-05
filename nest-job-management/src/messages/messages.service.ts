import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageRepository } from './message.repository';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './message.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageRepository)
    private messageRepository: MessageRepository,
  ) {}

  async sendMessage(
    createMessageDto: CreateMessageDto,
    user: User,
  ): Promise<Message> {
    const { receiverId, content } = createMessageDto;

    const message = this.messageRepository.create({
      content,
      sender: user,
      receiver: { id: receiverId } as User,
    });

    await this.messageRepository.save(message);
    return message;
  }

  async getMessages(user: User): Promise<Message[]> {
    const sentMessages = await this.messageRepository.find({
      where: { sender: user },
      relations: ['receiver'],
    });

    const receivedMessages = await this.messageRepository.find({
      where: { receiver: user },
      relations: ['sender'],
    });

    return [...sentMessages, ...receivedMessages];
  }
}
