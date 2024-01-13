import { PartialType, PickType } from '@nestjs/mapped-types';
import { DraftUserSignUpDto } from './draft-user-signup.dto';

export class GetUserSignUpFiltersDto extends PartialType(
  PickType(DraftUserSignUpDto, [
    'status',
    'corporateId',
    'role',
    'privilege',
  ] as const),
) {}
