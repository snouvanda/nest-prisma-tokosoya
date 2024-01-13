import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreateUserSignUpProcessDto } from './dto/create-user-signup-process.dto';
import { ReadUserSignUpProcessDto } from './dto/read-user-signup-process.dto';
import { GetUserSignUpProcessFiltersDto } from './dto/get-user-signup-process-filters.dto';
import {
  SignUpProcessEnum,
  UserPrivilegeEnum,
  UserRoleEnum,
} from '@prisma/client';
import { merge } from 'lodash';
import { UpdateUserSignUpProcessDto } from './dto/update-user-signup-process.dto';

@Injectable()
export class UserSignUpProcessService {
  constructor(private readonly dbService: DbService) {}

  SignUpProcessReturnFields = {
    id: true,
    signUpId: true,
    process: true,
    description: true,
    role: true,
    privilege: true,
    corporateId: true,
    isActive: true,
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
    deletedAt: true,
    deletedBy: true,
  };

  async create(
    createSignUpProcessDto: CreateUserSignUpProcessDto,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpProcessDto> {
    const signUpProcess = await this.dbService.userSignUpProcess.create({
      data: createSignUpProcessDto,
      select: this.SignUpProcessReturnFields,
    });

    if (formatReturnTimeZone) {
      return {
        ...signUpProcess,
        createdAt: signUpProcess.createdAt
          ? this.dbService.formatTimeZone(signUpProcess.createdAt)
          : null,
        updatedAt: signUpProcess.updatedAt
          ? this.dbService.formatTimeZone(signUpProcess.updatedAt)
          : null,
      };
    }
    return signUpProcess;
  }

  async findAll(
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpProcessDto[]> {
    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const signUpProcesses = await this.dbService.userSignUpProcess.findMany({
      where: recordState,
      select: this.SignUpProcessReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUpProcesses) {
        const signUpProcesses_ = signUpProcesses.map((signUpProcess) => {
          return {
            ...signUpProcess,
            createdAt: signUpProcess.createdAt
              ? this.dbService.formatTimeZone(signUpProcess.createdAt)
              : null,
            updatedAt: signUpProcess.updatedAt
              ? this.dbService.formatTimeZone(signUpProcess.updatedAt)
              : null,
          };
        });
        return signUpProcesses_;
      }
    }
    return signUpProcesses;
  }

  async findAllWithFilters(
    filterDto: GetUserSignUpProcessFiltersDto,
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpProcessDto[]> {
    const { process, role, privilege, corporateId } = filterDto;

    type Criterias = {
      process: SignUpProcessEnum;
      role: UserRoleEnum;
      privilege: UserPrivilegeEnum;
      corporateId: string;
    };

    const criterias: Partial<Criterias> = {};

    if (process) criterias.process = process;
    if (role) criterias.role = role;
    if (privilege) criterias.privilege = privilege;
    if (corporateId) criterias.corporateId = corporateId;

    if (!process && !role && !privilege && !corporateId) {
      throw new HttpException(
        'Query key(s) and value(s) required.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const signUpProcesses = await this.dbService.userSignUpProcess.findMany({
      where: merge(criterias, recordState),
      select: this.SignUpProcessReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUpProcesses) {
        const signUpProcesses_ = signUpProcesses.map((signUpProcess) => {
          return {
            ...signUpProcess,
            createdAt: signUpProcess.createdAt
              ? this.dbService.formatTimeZone(signUpProcess.createdAt)
              : null,
            updatedAt: signUpProcess.updatedAt
              ? this.dbService.formatTimeZone(signUpProcess.updatedAt)
              : null,
            deletedAt: signUpProcess.deletedAt
              ? this.dbService.formatTimeZone(signUpProcess.deletedAt)
              : null,
          };
        });
        return signUpProcesses_;
      }
    }
    return signUpProcesses;
  }

  async findOne(
    id: number,
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpProcessDto> {
    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const signUpProcess = await this.dbService.userSignUpProcess.findUnique({
      where: merge({ id }, recordState),
      select: this.SignUpProcessReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUpProcess) {
        return {
          ...signUpProcess,
          createdAt: signUpProcess.createdAt
            ? this.dbService.formatTimeZone(signUpProcess.createdAt)
            : null,
          updatedAt: signUpProcess.updatedAt
            ? this.dbService.formatTimeZone(signUpProcess.updatedAt)
            : null,
          deletedAt: signUpProcess.deletedAt
            ? this.dbService.formatTimeZone(signUpProcess.deletedAt)
            : null,
        };
      }
      return signUpProcess;
    }
  }

  async update(
    id: number,
    updateSignUpProcessDto: UpdateUserSignUpProcessDto,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpProcessDto> {
    const signUpProcess = await this.dbService.userSignUpProcess.update({
      where: { id },
      data: updateSignUpProcessDto,
      select: this.SignUpProcessReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUpProcess) {
        return {
          ...signUpProcess,
          createdAt: signUpProcess.createdAt
            ? this.dbService.formatTimeZone(signUpProcess.createdAt)
            : null,
          updatedAt: signUpProcess.updatedAt
            ? this.dbService.formatTimeZone(signUpProcess.updatedAt)
            : null,
          deletedAt: signUpProcess.deletedAt
            ? this.dbService.formatTimeZone(signUpProcess.deletedAt)
            : null,
        };
      }
    }
    return signUpProcess;
  }

  async remove(
    id: number,
    username: string,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpProcessDto> {
    const found = this.findOne(id);

    if (!found) {
      throw new HttpException(
        'UserSignUpProcess not found.',
        HttpStatus.NOT_FOUND,
      );
    }

    const signUpProcess = await this.dbService.userSignUpProcess.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: username },
      select: { id: true, deletedAt: true, deletedBy: true },
    });

    if (formatReturnTimeZone) {
      if (signUpProcess) {
        return {
          ...signUpProcess,

          deletedAt: signUpProcess.deletedAt
            ? this.dbService.formatTimeZone(signUpProcess.deletedAt)
            : null,
        };
      }
    }
    return signUpProcess;
  }
}
