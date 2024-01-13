import { OmitType } from '@nestjs/mapped-types';
import { DraftUserSignUpProcessDto } from './draft-user-signup-procress.dto';

export class CreateUserSignUpProcessDto extends OmitType(
  DraftUserSignUpProcessDto,
  ['id', 'updatedAt', 'updatedBy', 'deletedAt', 'deletedBy'] as const,
) {}
