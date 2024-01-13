import { OmitType, PartialType } from '@nestjs/mapped-types';
import { DraftUserSignUpDto } from './draft-user-signup.dto';

export class UpdateUserSignUpDto extends PartialType(
  OmitType(DraftUserSignUpDto, [
    'id',
    'username',
    'createdAt',
    'createdBy',
    'deletedAt',
    'deletedBy',
  ] as const),
) {}
