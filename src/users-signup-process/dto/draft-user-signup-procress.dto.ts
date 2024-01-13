import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';
import {
  UserPrivilegeEnum,
  UserRoleEnum,
  SignUpProcessEnum,
} from '@prisma/client';

export class DraftUserSignUpProcessDto {
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  signUpId: number;

  @IsNotEmpty()
  @IsEnum(SignUpProcessEnum)
  // @IsEnum(SignUpProcessEnum, { message: 'Valid process required' })
  process: SignUpProcessEnum;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  processToken: string;

  @IsNotEmpty()
  @IsEnum(UserRoleEnum)
  // @IsEnum(UserRole, { message: 'Valid role required' })
  role: UserRoleEnum;

  @IsNotEmpty()
  @IsEnum(UserPrivilegeEnum)
  // @IsEnum(UserPrivilege, { message: 'Valid privilege required' })
  privilege: UserPrivilegeEnum;

  @IsOptional()
  @IsString()
  @Length(6)
  corporateId: string;

  @IsBoolean()
  isActive: boolean;

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
