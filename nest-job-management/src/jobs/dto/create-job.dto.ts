import { IsNotEmpty } from 'class-validator';

export class createJobDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
