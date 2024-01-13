import { Module } from '@nestjs/common';
import { UserSignUpProcessService } from './user-signup-process.service';
import { UserSignUpProcessController } from './user-signup-process.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UserSignUpProcessService],
  controllers: [UserSignUpProcessController],
})
export class UserSignUpProcessModule {}
