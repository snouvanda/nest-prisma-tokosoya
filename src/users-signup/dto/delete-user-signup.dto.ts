import { PickType } from '@nestjs/mapped-types';
import { DraftUserSignUpDto } from './draft-user-signup.dto';

export class DeleteUserSignUpDto extends PickType(DraftUserSignUpDto, [
  'id',
  'deletedAt',
  'deletedBy',
] as const) {}
