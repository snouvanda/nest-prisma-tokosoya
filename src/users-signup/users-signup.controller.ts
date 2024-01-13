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
  constructor(private readonly signUpService: UsersSignUpService) {}

  @Post()
  create(@Body(ValidationPipe) createSignUpDto: CreateUserSignUpDto) {
    return this.signUpService.create(createSignUpDto);
  }

  @Get()
  findAll(@Query(ValidationPipe) filterDto: GetUserSignUpFiltersDto) {
    if (Object.keys(filterDto).length) {
      return this.signUpService.findAllWithFilters(filterDto);
    }
    return this.signUpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.signUpService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateSignUpDto: UpdateUserSignUpDto,
  ) {
    return this.signUpService.update(id, updateSignUpDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, username: string = 'Tester') {
    // TODO: get username from JWT
    return this.signUpService.remove(id, username);
  }
}
