import {
  Controller,
  // Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  // Query,
  // ParseIntPipe,
  ValidationPipe,
  // HttpException,
  // HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { GetUsersFilterDto } from './dto/get-users-filter.dto';
// import { UpdateUserPasswordDto } from './dto/update-user-password.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  // @Get()
  // findAll(@Query(ValidationPipe) filterDto: GetUsersFilterDto) {
  //   if (Object.keys(filterDto).length) {
  //     console.log(filterDto);
  //     return this.usersService.findAllWithFilters(filterDto);
  //   } else {
  //     return this.usersService.findAll();
  //   }
  // }
  // @Get('id/:id')
  // findOneById(@Param('id', ParseIntPipe) id: number) {
  //   return this.usersService.findOneById(id);
  // }
  // @Get('email/:email')
  // findOneByEmail(@Param('email') email: string) {
  //   return this.usersService.findOneByEmail(email);
  // }
  // @Get('username/:username')
  // findOneByUsername(@Param('username') username: string) {
  //   return this.usersService.findOneByUsername(username);
  // }
  // @Patch('id/:id')
  // updateById(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  // ) {
  //   // Validate if forbidden properties were excluded from request object.
  //   if (
  //     'id' in updateUserDto ||
  //     'username' in updateUserDto ||
  //     'password' in updateUserDto ||
  //     'currentPassword' in updateUserDto ||
  //     'newPassword' in updateUserDto ||
  //     'createdAt' in updateUserDto ||
  //     'updatedAt' in updateUserDto
  //   ) {
  //     throw new HttpException(
  //       'FORBIDDEN. Update request contains forbidden properties.',
  //       HttpStatus.FORBIDDEN,
  //     );
  //   }
  //   return this.usersService.updateById(id, updateUserDto);
  // }
  // @Patch('username/:username')
  // updateByUsername(
  //   @Param('username') username: string,
  //   @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  // ) {
  //   // Validate if forbidden properties were excluded from request object.
  //   if (
  //     'id' in updateUserDto ||
  //     'username' in updateUserDto ||
  //     'password' in updateUserDto ||
  //     'currentPassword' in updateUserDto ||
  //     'newPassword' in updateUserDto ||
  //     'createdAt' in updateUserDto ||
  //     'updatedAt' in updateUserDto
  //   ) {
  //     throw new HttpException(
  //       'FORBIDDEN. Update request contains forbidden properties.',
  //       HttpStatus.FORBIDDEN,
  //     );
  //   }
  //   return this.usersService.updateByUsername(username, updateUserDto);
  // }
  // @Patch('password/:id/:username')
  // updatePassword(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Param('username') username: string,
  //   @Body(ValidationPipe) updateUserPasswordDto: UpdateUserPasswordDto,
  // ) {
  //   // return this.usersService.updatePassword(id, updateUserPasswordDto);
  //   return { id, username, load: updateUserPasswordDto };
  // }
  // @Delete(':id')
  // remove(@Param('id', ParseIntPipe) id: number) {
  //   return this.usersService.remove(id);
  // }
}
