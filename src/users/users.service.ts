import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersFilterDto } from './dto/get-users-filter.dto';
import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    return createUserDto;
  }

  findAll() {
    return `This action returns all users`;
  }

  findAllWithFilters(filterDto: GetUsersFilterDto) {
    const { role, corporateId } = filterDto;
    let users = {};

    if (role) {
      // get users with particular role
      users = [`User1 with role: ${role}`, `User2 with role: ${role}`];
    }

    if (corporateId) {
      // get user with particular corporateId
      users = [
        `User1 with corporateId: ${corporateId}`,
        `User2 with corporateId: ${corporateId}`,
      ];
    }

    if (role && corporateId) {
      // get user with particular role and corporateId
      users = [
        `User1 with role: ${role}, corporateId: ${corporateId}`,
        `User2 with role: ${role}, corporateId: ${corporateId}`,
      ];
    }

    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;

    return { id, updateUserDto };
  }

  updatePassword(id: number, updateUserPasswordDto: UpdateUserPasswordDto) {
    const { currentPassword, newPassword } = updateUserPasswordDto;
    return {
      message: `ONLY FOR TEST RESPONSE. Password has been changed from ${currentPassword} into ${newPassword}.`,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
