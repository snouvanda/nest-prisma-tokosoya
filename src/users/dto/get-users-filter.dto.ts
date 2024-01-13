import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { UserPrivilege, UserRole } from '@prisma/client';
import { Type } from 'class-transformer';

export class GetUsersFilterDto {
  @IsOptional()
  @IsEnum(UserRole, { message: 'Valid role required' })
  role: UserRole;

  @IsOptional()
  @IsEnum(UserPrivilege, { message: 'Valid privilege required' })
  privilege: UserPrivilege;

  @IsOptional()
  @IsNotEmpty()
  @Type(() => Number) // transform numberString from http request query into number
  @IsNumber()
  corporateId: number;
}
