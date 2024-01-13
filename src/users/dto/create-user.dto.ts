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
// import { UserRole } from '../user-enums';
import { UserPrivilege, UserRole } from '@prisma/client';

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

  @IsOptional()
  @IsString()
  @Length(10, 30)
  phone: string;

  @IsNotEmpty()
  @IsEnum(UserRole, { message: 'Valid role required' })
  role: UserRole;

  @IsNotEmpty()
  @IsEnum(UserPrivilege, { message: 'Valid privilege required' })
  privilege: UserPrivilege;

  @IsOptional()
  @IsNumber()
  corporateId: number;

  @IsOptional()
  createdAt: string | Date;

  @IsOptional()
  updatedAt: string | Date;
}
