import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersSignUpModule } from './users-signup/users-signup.module';
import { UserSignUpProcessModule } from './users-signup-process/user-signup-process.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [UsersModule, UsersSignUpModule, UserSignUpProcessModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
