import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  receiverId: string;

  @IsNotEmpty()
  content: string;
}
