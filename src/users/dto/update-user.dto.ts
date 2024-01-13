import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

class OmittedCreateUserDto extends OmitType(CreateUserDto, [
  'password' as const,
  'username' as const,
  'createdAt' as const,
  'updatedAt' as const,
]) {}

export class UpdateUserDto extends PartialType(OmittedCreateUserDto) {}
