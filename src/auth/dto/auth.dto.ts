import { IsString, MaxLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @MaxLength(20)
  username: string;

  @IsString()
  @MaxLength(20)
  password: string;
}
