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
import { UserPrivilege, UserSignUpStatus, UserRole } from '@prisma/client';

export class DraftUserSignUpDto {
  @IsOptional()
  id: number;

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
  @IsAlphanumeric()
  @MaxLength(10)
  otp: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  phonesms: string;

  @IsOptional()
  @IsString()
  @Length(10, 20)
  whatsapp: string;

  @IsOptional()
  @IsString()
  @Length(6)
  corporateId: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  // @IsEnum(UserRole, { message: 'Valid role required' })
  role: UserRole;

  @IsNotEmpty()
  @IsEnum(UserPrivilege)
  // @IsEnum(UserPrivilege, { message: 'Valid privilege required' })
  privilege: UserPrivilege;

  @IsNotEmpty()
  @IsEnum(UserSignUpStatus)
  // @IsEnum(UserSignUpStatus, { message: 'Valid request status required' })
  status: UserSignUpStatus;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  processToken: string;

  @IsOptional()
  @IsDateString()
  processedAt: string | Date;

  @IsOptional()
  @MaxLength(20)
  processedBy: string;

  @IsOptional()
  @IsDateString()
  createdAt: string | Date;

  @IsOptional()
  @MaxLength(20)
  createdBy: string;

  @IsOptional()
  @IsDateString()
  updatedAt: string | Date;

  @IsOptional()
  @MaxLength(20)
  updatedBy: string;

  @IsOptional()
  @IsDateString()
  deletedAt: string | Date;

  @IsOptional()
  @MaxLength(20)
  deletedBy: string;
}
