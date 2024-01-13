import { PartialType, PickType } from '@nestjs/mapped-types';
import { DraftUserSignUpProcessDto } from './draft-user-signup-procress.dto';

export class GetUserSignUpProcessFiltersDto extends PartialType(
  PickType(DraftUserSignUpProcessDto, [
    'process',
    'corporateId',
    'role',
    'privilege',
  ] as const),
) {}
