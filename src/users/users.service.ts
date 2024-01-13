import { Injectable } from '@nestjs/common';
// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { GetUsersFilterDto } from './dto/get-users-filter.dto';
// import { UpdateUserPasswordDto } from './dto/update-user-password.dto';
// import { DatabaseService } from 'src/database/database.service';
// import { ReadUserDto } from './dto/read-user.dto';
// import { UserPrivilege, UserRole } from '@prisma/client';

@Injectable()
export class UsersService {
  // constructor(private readonly dbService: DatabaseService) {}
  // UserReturnFields = {
  //   id: true,
  //   username: true,
  //   email: true,
  //   fullname: true,
  //   phone: true,
  //   role: true,
  //   privilege: true,
  //   corporateId: true,
  //   createdAt: true,
  //   updatedAt: true,
  // };
  // async create(
  //   createUserDto: CreateUserDto,
  //   formatReturnTimeZone: boolean = true,
  // ): Promise<ReadUserDto> {
  //   const user = await this.dbService.user.create({
  //     data: createUserDto,
  //     select: this.UserReturnFields,
  //   });
  //   if (formatReturnTimeZone) {
  //     return {
  //       ...user,
  //       createdAt: this.dbService.formatTimeZone(user.createdAt),
  //       updatedAt: this.dbService.formatTimeZone(user.updatedAt),
  //     };
  //   }
  //   return user;
  // }
  // async findAll(formatReturnTimeZone: boolean = true): Promise<ReadUserDto[]> {
  //   const users = await this.dbService.user.findMany({
  //     select: this.UserReturnFields,
  //   });
  //   if (formatReturnTimeZone) {
  //     if (users) {
  //       const usersF = users.map((user) => {
  //         return {
  //           ...user,
  //           createdAt: this.dbService.formatTimeZone(user.createdAt),
  //           updatedAt: this.dbService.formatTimeZone(user.updatedAt),
  //         };
  //       });
  //       return usersF;
  //     }
  //   }
  //   return users;
  // }
  // async findAllWithFilters(
  //   filterDto: GetUsersFilterDto,
  //   formatReturnTimeZone: boolean = true,
  // ): Promise<ReadUserDto[]> {
  //   const { role, privilege, corporateId } = filterDto;
  //   type Criterias = {
  //     role: UserRole;
  //     privilege: UserPrivilege;
  //     corporateId: number;
  //   };
  //   const criterias: Partial<Criterias> = {};
  //   if (role) criterias.role = role;
  //   if (privilege) criterias.privilege = privilege;
  //   // convert corporateId from string into number with unary operator (+)
  //   if (corporateId) criterias.corporateId = +corporateId;
  //   if (!role && !privilege && !corporateId) {
  //     throw new HttpException(
  //       'Query parameter(s) not available',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }
  //   const users = await this.dbService.user.findMany({
  //     where: criterias,
  //     select: this.UserReturnFields,
  //   });
  //   if (formatReturnTimeZone) {
  //     if (users) {
  //       const usersF = users.map((user) => {
  //         return {
  //           ...user,
  //           createdAt: this.dbService.formatTimeZone(user.createdAt),
  //           updatedAt: this.dbService.formatTimeZone(user.updatedAt),
  //         };
  //       });
  //       return usersF;
  //     }
  //   }
  //   return users;
  // }
  // async findOneById(
  //   id: number,
  //   formatReturnTimeZone: boolean = true,
  // ): Promise<ReadUserDto> {
  //   const user = await this.dbService.user.findUnique({
  //     where: { id },
  //     select: this.UserReturnFields,
  //   });
  //   if (formatReturnTimeZone) {
  //     if (user) {
  //       return {
  //         ...user,
  //         createdAt: this.dbService.formatTimeZone(user.createdAt),
  //         updatedAt: this.dbService.formatTimeZone(user.updatedAt),
  //       };
  //     }
  //   }
  //   return user;
  // }
  // async findOneByEmail(
  //   email: string,
  //   formatReturnTimeZone: boolean = true,
  // ): Promise<ReadUserDto> {
  //   const user = await this.dbService.user.findUnique({
  //     where: { email },
  //     select: this.UserReturnFields,
  //   });
  //   if (formatReturnTimeZone) {
  //     if (user) {
  //       return {
  //         ...user,
  //         createdAt: this.dbService.formatTimeZone(user.createdAt),
  //         updatedAt: this.dbService.formatTimeZone(user.updatedAt),
  //       };
  //     }
  //   }
  //   return user;
  // }
  // async findOneByUsername(
  //   username: string,
  //   formatReturnTimeZone: boolean = true,
  // ): Promise<ReadUserDto> {
  //   const user = await this.dbService.user.findUnique({
  //     where: { username },
  //     select: this.UserReturnFields,
  //   });
  //   if (formatReturnTimeZone) {
  //     if (user) {
  //       return {
  //         ...user,
  //         createdAt: this.dbService.formatTimeZone(user.createdAt),
  //         updatedAt: this.dbService.formatTimeZone(user.updatedAt),
  //       };
  //     }
  //   }
  //   return user;
  // }
  // async updateById(
  //   id: number,
  //   updateUserDto: UpdateUserDto,
  //   formatReturnTimeZone: boolean = true,
  // ): Promise<ReadUserDto> {
  //   const userUpdate = await this.dbService.user.update({
  //     where: { id },
  //     data: updateUserDto,
  //   });
  //   if (formatReturnTimeZone) {
  //     if (userUpdate) {
  //       return {
  //         ...userUpdate,
  //         createdAt: this.dbService.formatTimeZone(userUpdate.createdAt),
  //         updatedAt: this.dbService.formatTimeZone(userUpdate.updatedAt),
  //       };
  //     }
  //   }
  //   return userUpdate;
  // }
  // async updateByUsername(
  //   username: string,
  //   updateUserDto: UpdateUserDto,
  //   formatReturnTimeZone: boolean = true,
  // ): Promise<ReadUserDto> {
  //   const userUpdate = await this.dbService.user.update({
  //     where: { username },
  //     data: updateUserDto,
  //   });
  //   if (formatReturnTimeZone) {
  //     if (userUpdate) {
  //       return {
  //         ...userUpdate,
  //         createdAt: this.dbService.formatTimeZone(userUpdate.createdAt),
  //         updatedAt: this.dbService.formatTimeZone(userUpdate.updatedAt),
  //       };
  //     }
  //   }
  //   return userUpdate;
  // }
  // updatePassword(id: number, updateUserPasswordDto: UpdateUserPasswordDto) {
  //   const { currentPassword, newPassword } = updateUserPasswordDto;
  //   return {
  //     message: `ONLY FOR TEST RESPONSE. Password has been changed from ${currentPassword} into ${newPassword}.`,
  //   };
  // }
  // remove(id: number, username: string) {
  //   return `This action removes user with id: ${id} & username: ${username}`;
  // }
}
