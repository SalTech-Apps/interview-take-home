import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageRepository } from './messages.repository';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetMessagesDto } from './dto/get-messages.dto';
import { Message } from './message.entity';
import { User } from 'src/auth/user.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageRepository)
    private messageRepository: MessageRepository,
  ) {}

  async sendMessage(createMessageDto: CreateMessageDto): Promise<Message> {
    const { senderId, receiverId, content } = createMessageDto;

    const message = this.messageRepository.create({
      content,
      sender: { id: senderId } as User,
      receiver: { id: receiverId } as User,
    });

    await this.messageRepository.save(message);
    return message;
  }

  async getMessages(getMessagesDto: GetMessagesDto): Promise<Message[]> {
    const { userId } = getMessagesDto;

    const sentMessages = await this.messageRepository.find({
      where: { sender: { id: userId } },
      relations: ['receiver'],
    });

    const receivedMessages = await this.messageRepository.find({
      where: { receiver: { id: userId } },
      relations: ['sender'],
    });

    return [...sentMessages, ...receivedMessages];
  }
}
