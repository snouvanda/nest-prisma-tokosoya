import { UserRole } from '../user-enums';

export class CreateUserDto {
  id: number;
  username: string;
  email: string;
  fullname: string;
  password: string;
  role: UserRole;
  corporateId: number;
}
