import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersSignUpService } from './users-signup.service';
import { CreateUserSignUpDto } from './dto/create-user-signup.dto';
import { GetUserSignUpFiltersDto } from './dto/get-user-signup-filters.dto';
import { UpdateUserSignUpDto } from './dto/update-user-signup.dto';

@Controller('users-signup')
export class UsersSignUpController {
  constructor(private readonly userSignUpService: UsersSignUpService) {}

  @Post()
  create(@Body(ValidationPipe) createUserSignUpDto: CreateUserSignUpDto) {
    return this.userSignUpService.create(createUserSignUpDto);
  }

  @Get()
  findAll(@Query(ValidationPipe) filterDto: GetUserSignUpFiltersDto) {
    if (Object.keys(filterDto).length) {
      return this.userSignUpService.findAllWithFilter(filterDto);
    }
    return this.userSignUpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userSignUpService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserSignUpDto: UpdateUserSignUpDto,
  ) {
    return this.userSignUpService.update(id, updateUserSignUpDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, username: string = 'Tester') {
    // TODO: get username from JWT
    return this.userSignUpService.remove(id, username);
  }
}
