import { OmitType, PartialType } from '@nestjs/mapped-types';
import { DraftUserSignUpProcessDto } from './draft-user-signup-procress.dto';

export class UpdateUserSignUpProcessDto extends PartialType(
  OmitType(DraftUserSignUpProcessDto, [
    'id',
    'createdAt',
    'createdBy',
    'deletedAt',
    'deletedBy',
  ] as const),
) {}
