import { PartialType } from '@nestjs/mapped-types';
import { DraftUserSignUpProcessDto } from './draft-user-signup-procress.dto';

export class ReadUserSignUpProcessDto extends PartialType(
  DraftUserSignUpProcessDto,
) {}
