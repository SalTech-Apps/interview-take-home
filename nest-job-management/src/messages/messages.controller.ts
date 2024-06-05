import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './message.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('messages')
@UseGuards(AuthGuard())
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async sendMessage(
    @Body() createMessageDto: CreateMessageDto,
    @GetUser() user: User,
  ): Promise<Message> {
    return this.messagesService.sendMessage(createMessageDto, user);
  }

  @Get()
  async getMessages(@GetUser() user: User): Promise<Message[]> {
    return this.messagesService.getMessages(user);
  }
}
