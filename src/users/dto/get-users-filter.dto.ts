import { IsEnum, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { UserRole } from '../user-enums';
import { Type } from 'class-transformer';

export class GetUsersFilterDto {
  @IsOptional()
  @IsEnum(UserRole, { message: 'Valid role required' })
  role: UserRole;

  @IsOptional()
  @IsNotEmpty()
  @Type(() => Number) // transform numberString from http request query into number
  @IsNumber()
  corporateId: number;
}
