import { IntersectionType, OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

class OmittedCreateUserDto extends OmitType(CreateUserDto, [
  'password' as const,
]) {}

class AdditionalUserInfo {
  id: number;
}

export class ReadUserDto extends IntersectionType(
  OmittedCreateUserDto,
  AdditionalUserInfo,
) {}

// export class ReadUserDto {
//   id: number;
//   username: string;
//   email: string;
//   fullname: string;
//   phone: string;
//   role: UserRole;
//   privilege: UserPrivilege;
//   corporateId: number;
//   createdAt: string | Date;
//   updatedAt: string | Date;
// }
