import {
  IsAlphanumeric,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

import { UserPrivilegeEnum, UserRoleEnum } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    maxLength: 20,
    example: 'snouvanda',
  })
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(8, 20)
  username: string;

  @ApiProperty({
    type: String,
    maxLength: 100,
    example: 'snouvanda@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  @Length(8, 100)
  email: string;

  @ApiProperty({
    type: String,
    maxLength: 50,
    example: 'Satrya Nouvanda',
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  fullname: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  salt: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  password: string;

  @ApiProperty({ type: String, example: '+6281233334444' })
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  phonesms: string;

  @ApiProperty({
    type: String,
    required: false,
    example: '+6281233334444',
    maxLength: 20,
  })
  @IsOptional()
  @IsString()
  @Length(10, 20)
  whatsapp: string;

  @ApiProperty({ type: UserRoleEnum, enum: UserRoleEnum })
  @IsNotEmpty()
  @IsEnum(UserRoleEnum, { message: 'Valid role required' })
  role: UserRoleEnum;

  @ApiProperty({ type: UserPrivilegeEnum, enum: UserPrivilegeEnum })
  @IsNotEmpty()
  @IsEnum(UserPrivilegeEnum, { message: 'Valid privilege required' })
  privilege: UserPrivilegeEnum;

  @ApiProperty({ type: String, required: false, example: 'C24002' })
  @IsOptional()
  @IsString()
  @MaxLength(6)
  corporateId: string;

  @IsOptional()
  @IsDateString()
  createdAt: string | Date;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  createdBy: string;

  @IsOptional()
  @IsDateString()
  updatedAt: string | Date;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  updatedBy: string;
}
