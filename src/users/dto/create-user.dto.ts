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
import { UserPrivilegeEnum, UserRoleEnum } from '@prisma/client';

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
  @IsEnum(UserRoleEnum, { message: 'Valid role required' })
  role: UserRoleEnum;

  @IsNotEmpty()
  @IsEnum(UserPrivilegeEnum, { message: 'Valid privilege required' })
  privilege: UserPrivilegeEnum;

  @IsOptional()
  @IsNumber()
  corporateId: number;

  @IsOptional()
  createdAt: string | Date;

  @IsOptional()
  updatedAt: string | Date;
}
