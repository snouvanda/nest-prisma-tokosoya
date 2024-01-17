import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersSignUpModule } from './users-signup/users-signup.module';
import { UserSignUpProcessModule } from './users-signup-process/user-signup-process.module';
import { DbModule } from './db/db.module';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    UsersSignUpModule,
    UserSignUpProcessModule,
    DbModule,
    EmployeesModule,
    AuthModule,
  ],
})
export class AppModule {}
