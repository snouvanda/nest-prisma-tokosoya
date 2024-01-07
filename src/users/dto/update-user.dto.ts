import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

class OmittedCreateUserDto extends OmitType(CreateUserDto, [
  'password' as const,
]) {}

export class UpdateUserDto extends PartialType(OmittedCreateUserDto) {}
