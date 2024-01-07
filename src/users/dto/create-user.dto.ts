import {
  IsAscii,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { UserRole } from '../user-enums';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(8, 255)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  fullname: string;

  @IsNotEmpty()
  @IsAscii()
  @Length(8, 25)
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRole, { message: 'Valid role required' })
  role: UserRole;

  @IsOptional()
  @IsNumber()
  corporateId: number;

  @IsOptional()
  @IsString()
  @Length(10, 30)
  phone: string;
}
