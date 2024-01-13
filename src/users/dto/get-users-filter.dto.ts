import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { UserPrivilegeEnum, UserRoleEnum } from '@prisma/client';
import { Type } from 'class-transformer';

export class GetUsersFilterDto {
  @IsOptional()
  @IsEnum(UserRoleEnum, { message: 'Valid role required' })
  role: UserRoleEnum;

  @IsOptional()
  @IsEnum(UserPrivilegeEnum, { message: 'Valid privilege required' })
  privilege: UserPrivilegeEnum;

  @IsOptional()
  @IsNotEmpty()
  @Type(() => Number) // transform numberString from http request query into number
  @IsNumber()
  corporateId: number;
}
