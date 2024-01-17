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
import { UserSignUpProcessService } from './user-signup-process.service';
import { CreateUserSignUpProcessDto } from './dto/create-user-signup-process.dto';
import { UpdateUserSignUpProcessDto } from './dto/update-user-signup-process.dto';
import { GetUserSignUpProcessFiltersDto } from './dto/get-user-signup-process-filters.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('signUpProcess')
@Controller('users-signup-process')
export class UserSignUpProcessController {
  constructor(
    private readonly signUpProcessService: UserSignUpProcessService,
  ) {}

  @Post()
  create(
    @Body(ValidationPipe) createSignUpProcessDto: CreateUserSignUpProcessDto,
  ) {
    return this.signUpProcessService.create(createSignUpProcessDto);
  }

  @Get()
  findAll(@Query(ValidationPipe) filterDto: GetUserSignUpProcessFiltersDto) {
    if (Object.keys(filterDto).length) {
      return this.signUpProcessService.findAllWithFilters(filterDto);
    }
    return this.signUpProcessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.signUpProcessService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateSignUpProcessDto: UpdateUserSignUpProcessDto,
  ) {
    return this.signUpProcessService.update(id, updateSignUpProcessDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, username: string = 'Tester') {
    // TODO: get username from JWT
    return this.signUpProcessService.remove(id, username);
  }
}
