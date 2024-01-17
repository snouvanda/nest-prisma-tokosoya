import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@ApiTags('employees')
@Controller('employees')
export class EmployeesController {
  @Post()
  create(@Body(ValidationPipe) createEmployeeDto: CreateEmployeeDto) {
    return createEmployeeDto;
  }

  @Get()
  findAll() {
    return [];
  }
}
