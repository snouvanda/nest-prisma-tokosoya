import { IsAscii, IsNotEmpty, Length } from 'class-validator';

export class UpdateUserPasswordDto {
  @IsNotEmpty()
  @IsAscii()
  @Length(8, 25)
  currentPassword: string;

  @IsNotEmpty()
  @IsAscii()
  @Length(8, 25)
  newPassword: string;
}
