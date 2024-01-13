import { OmitType } from '@nestjs/mapped-types';
import { DraftUserSignUpDto } from './draft-user-signup.dto';

export class CreateUserSignUpDto extends OmitType(DraftUserSignUpDto, [
  'id',
  'otp',
  'status',
  'processToken',
  'processedAt',
  'processedBy',
  'updatedAt',
  'updatedBy',
  'deletedAt',
  'deletedBy',
] as const) {}
