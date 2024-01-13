import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserSignUpDto } from './dto/create-user-signup.dto';
import { ReadUserSignUpDto } from './dto/read-user-signup.dto';
import { GetUserSignUpFiltersDto } from './dto/get-user-signup-filters.dto';
import {
  UserPrivilegeEnum,
  UserRoleEnum,
  SignUpStatusEnum,
} from '@prisma/client';
import { UpdateUserSignUpDto } from './dto/update-user-signup.dto';
import { merge } from 'lodash';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersSignUpService {
  constructor(private readonly dbService: DbService) {}

  SignUpReturnFields = {
    id: true,
    username: true,
    email: true,
    fullname: true,
    phonesms: true,
    whatsapp: true,
    corporateId: true,
    role: true,
    privilege: true,
    status: true,
    processedAt: true,
    processedBy: true,
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
    deletedAt: true,
    deletedBy: true,
  };

  async create(
    createSignUpDto: CreateUserSignUpDto,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const signUp = await this.dbService.userSignUp.create({
      data: createSignUpDto,
      select: this.SignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      return {
        ...signUp,
        createdAt: signUp.createdAt
          ? this.dbService.formatTimeZone(signUp.createdAt)
          : null,
        updatedAt: signUp.updatedAt
          ? this.dbService.formatTimeZone(signUp.updatedAt)
          : null,
      };
    }

    return signUp;
  }

  async findAll(
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpDto[]> {
    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const signUps = await this.dbService.userSignUp.findMany({
      where: recordState,
      select: this.SignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUps) {
        const signUps_ = signUps.map((signUp) => {
          return {
            ...signUp,
            createdAt: signUp.createdAt
              ? this.dbService.formatTimeZone(signUp.createdAt)
              : null,
            updatedAt: signUp.updatedAt
              ? this.dbService.formatTimeZone(signUp.updatedAt)
              : null,
          };
        });
        return signUps_;
      }
    }
    return signUps;
  }

  async findAllWithFilters(
    filterDto: GetUserSignUpFiltersDto,
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpDto[]> {
    const { status, role, privilege, corporateId } = filterDto;

    type Criterias = {
      status: SignUpStatusEnum;
      role: UserRoleEnum;
      privilege: UserPrivilegeEnum;
      corporateId: string;
    };

    const criterias: Partial<Criterias> = {};

    if (status) criterias.status = status;
    if (role) criterias.role = role;
    if (privilege) criterias.privilege = privilege;
    if (corporateId) criterias.corporateId = corporateId;

    if (!status && !role && !privilege && !corporateId) {
      throw new HttpException(
        'Query key(s) and value(s) required.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const signUps = await this.dbService.userSignUp.findMany({
      where: merge(criterias, recordState),
      select: this.SignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUps) {
        const signUps_ = signUps.map((signUp) => {
          return {
            ...signUp,
            createdAt: signUp.createdAt
              ? this.dbService.formatTimeZone(signUp.createdAt)
              : null,
            updatedAt: signUp.updatedAt
              ? this.dbService.formatTimeZone(signUp.updatedAt)
              : null,
            deletedAt: signUp.deletedAt
              ? this.dbService.formatTimeZone(signUp.deletedAt)
              : null,
          };
        });
        return signUps_;
      }
    }
    return signUps;
  }

  async findOne(
    id: number,
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const signUp = await this.dbService.userSignUp.findUnique({
      where: merge({ id }, recordState),
      select: this.SignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUp) {
        return {
          ...signUp,
          createdAt: signUp.createdAt
            ? this.dbService.formatTimeZone(signUp.createdAt)
            : null,
          updatedAt: signUp.updatedAt
            ? this.dbService.formatTimeZone(signUp.updatedAt)
            : null,
          deletedAt: signUp.deletedAt
            ? this.dbService.formatTimeZone(signUp.deletedAt)
            : null,
        };
      }
      return signUp;
    }
  }

  async update(
    id: number,
    updateSignUpDto: UpdateUserSignUpDto,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const signUp = await this.dbService.userSignUp.update({
      where: { id },
      data: updateSignUpDto,
      select: this.SignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      if (signUp) {
        return {
          ...signUp,
          createdAt: signUp.createdAt
            ? this.dbService.formatTimeZone(signUp.createdAt)
            : null,
          updatedAt: signUp.updatedAt
            ? this.dbService.formatTimeZone(signUp.updatedAt)
            : null,
          deletedAt: signUp.deletedAt
            ? this.dbService.formatTimeZone(signUp.deletedAt)
            : null,
        };
      }
    }
    return signUp;
  }

  async remove(
    id: number,
    username: string,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const found = this.findOne(id);

    if (!found) {
      throw new HttpException('UserSignUp not found.', HttpStatus.NOT_FOUND);
    }

    const signUp = await this.dbService.userSignUp.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: username },
      select: { id: true, deletedAt: true, deletedBy: true },
    });

    if (formatReturnTimeZone) {
      if (signUp) {
        return {
          ...signUp,

          deletedAt: signUp.deletedAt
            ? this.dbService.formatTimeZone(signUp.deletedAt)
            : null,
        };
      }
    }
    return signUp;
  }
}
