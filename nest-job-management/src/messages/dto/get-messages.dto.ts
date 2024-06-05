import { IsNotEmpty } from 'class-validator';

export class GetMessagesDto {
  @IsNotEmpty()
  userId: string;
}
