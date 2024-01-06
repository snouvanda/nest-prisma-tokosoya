import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { UserRole } from '../user-enums';

export class GetUsersFilterDto {
  @IsOptional()
  @IsIn([
    UserRole.ADMIN,
    UserRole.AUDITOR,
    UserRole.CUSTOMER,
    UserRole.EMPLOYEE,
    UserRole.SUPPLIER,
    UserRole.TRANSPORTER,
  ])
  role: UserRole;

  @IsOptional()
  @IsNotEmpty()
  corporateId: number;
}
