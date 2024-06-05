import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { GetMessagesDto } from './dto/get-messages.dto';
import { Message } from './message.entity';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async sendMessage(
    @Body() createMessageDto: CreateMessageDto,
  ): Promise<Message> {
    return this.messagesService.sendMessage(createMessageDto);
  }

  @Get(':userId')
  async getMessages(@Param('userId') userId: string): Promise<Message[]> {
    const getMessagesDto = new GetMessagesDto();
    getMessagesDto.userId = userId;
    return this.messagesService.getMessages(getMessagesDto);
  }
}
