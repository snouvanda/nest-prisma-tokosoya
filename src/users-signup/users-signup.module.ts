import { Module } from '@nestjs/common';
import { UsersSignUpService } from './users-signup.service';
import { UsersSignUpController } from './users-signup.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [UsersSignUpService],
  controllers: [UsersSignUpController],
})
export class UsersSignUpModule {}
