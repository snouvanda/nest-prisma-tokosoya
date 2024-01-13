import { Module } from '@nestjs/common';
import { UserSignUpProcessService } from './user-signup-process.service';
import { UserSignUpProcessController } from './user-signup-process.controller';

@Module({
  providers: [UserSignUpProcessService],
  controllers: [UserSignUpProcessController],
})
export class UserSignUpProcessModule {}
