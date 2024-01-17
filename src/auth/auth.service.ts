import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/types';

@Injectable()
export class AuthService {
  constructor(private readonly dbService: DbService) {}

  hashData(data: string, salt: string) {
    return bcrypt.hash(data, salt);
  }
  async signupLocal(dto: CreateUserDto): Promise<User> {
    const hashedPassword = await this.hashData(dto.password, dto.salt);
    dto.password = hashedPassword;
    const newUser = await this.dbService.user.create({
      data: dto,
    });

    return newUser;
  }

  signinLocal() {}

  logout() {}

  refreshTokens() {}
}
