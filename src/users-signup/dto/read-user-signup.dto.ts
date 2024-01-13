import { OmitType, PartialType } from '@nestjs/mapped-types';
import { DraftUserSignUpDto } from './draft-user-signup.dto';

export class ReadUserSignUpDto extends PartialType(
  OmitType(DraftUserSignUpDto, ['otp'] as const),
) {}
