import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserSignUpDto } from './dto/create-user-signup.dto';
import { ReadUserSignUpDto } from './dto/read-user-signup.dto';
import { GetUserSignUpFiltersDto } from './dto/get-user-signup-filters.dto';
import { UserPrivilege, UserRole, UserSignUpStatus } from '@prisma/client';
import { UpdateUserSignUpDto } from './dto/update-user-signup.dto';
import { merge } from 'lodash';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersSignUpService {
  constructor(private readonly dbService: DbService) {}

  UserSignUpReturnFields = {
    id: true,
    username: true,
    email: true,
    fullname: true,
    whatsapp: true,
    phonesms: true,
    corporateId: true,
    role: true,
    privilege: true,
    status: true,
    createdAt: true,
    createdBy: true,
    updatedAt: true,
    updatedBy: true,
    deletedAt: true,
    deletedBy: true,
  };

  async create(
    createUserSignUpDto: CreateUserSignUpDto,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const userSignUp = await this.dbService.userSignUp.create({
      data: createUserSignUpDto,
      select: this.UserSignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      return {
        ...userSignUp,
        createdAt: this.dbService.formatTimeZone(userSignUp.createdAt),
        updatedAt: this.dbService.formatTimeZone(userSignUp.updatedAt),
      };
    }

    return userSignUp;
  }

  async findAll(
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpDto[]> {
    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const userSignUp = await this.dbService.userSignUp.findMany({
      select: this.UserSignUpReturnFields,
      where: recordState,
    });

    if (formatReturnTimeZone) {
      if (userSignUp) {
        const userSignUpF = userSignUp.map((userSignUp) => {
          return {
            ...userSignUp,
            createdAt: this.dbService.formatTimeZone(userSignUp.createdAt),
            updatedAt: this.dbService.formatTimeZone(userSignUp.updatedAt),
          };
        });
        return userSignUpF;
      }
    }
    return userSignUp;
  }

  async findAllWithFilter(
    filterDto: GetUserSignUpFiltersDto,
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpDto[]> {
    const { status, role, privilege, corporateId } = filterDto;
    type Criterias = {
      status: UserSignUpStatus;
      role: UserRole;
      privilege: UserPrivilege;
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

    const usersSignUp = await this.dbService.userSignUp.findMany({
      where: merge(criterias, recordState),
      select: this.UserSignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      if (usersSignUp) {
        const usersSignUpF = usersSignUp.map((userSignUp) => {
          return {
            ...userSignUp,
            createdAt: this.dbService.formatTimeZone(userSignUp.createdAt),
            updatedAt: this.dbService.formatTimeZone(userSignUp.updatedAt),
            deletedAt: this.dbService.formatTimeZone(userSignUp.deletedAt),
          };
        });
        return usersSignUpF;
      }
    }
    return usersSignUp;
  }

  async findOneById(
    id: number,
    formatReturnTimeZone: boolean = true,
    excludeDeletedRecord: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const recordState =
      this.dbService.getRecordStateCriteria(excludeDeletedRecord);

    const userSignUp = await this.dbService.userSignUp.findUnique({
      where: merge({ id }, recordState),
      select: this.UserSignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      if (userSignUp) {
        return {
          ...userSignUp,
          createdAt: this.dbService.formatTimeZone(userSignUp.createdAt),
          updatedAt: this.dbService.formatTimeZone(userSignUp.updatedAt),
          deletedAt: this.dbService.formatTimeZone(userSignUp.deletedAt),
        };
      }
      return userSignUp;
    }
  }

  async update(
    id: number,
    updateUserSignUpDto: UpdateUserSignUpDto,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const userSignUpUpdate = await this.dbService.userSignUp.update({
      where: { id },
      data: updateUserSignUpDto,
      select: this.UserSignUpReturnFields,
    });

    if (formatReturnTimeZone) {
      if (userSignUpUpdate) {
        return {
          ...userSignUpUpdate,
          createdAt: this.dbService.formatTimeZone(userSignUpUpdate.createdAt),
          updatedAt: this.dbService.formatTimeZone(userSignUpUpdate.updatedAt),
          deletedAt: this.dbService.formatTimeZone(userSignUpUpdate.deletedAt),
        };
      }
    }
    return userSignUpUpdate;
  }

  async remove(
    id: number,
    username: string,
    formatReturnTimeZone: boolean = true,
  ): Promise<ReadUserSignUpDto> {
    const found = this.findOneById(id);

    if (!found) {
      throw new HttpException('UserSignUp not found.', HttpStatus.NOT_FOUND);
    }

    const userSignUpRemove = await this.dbService.userSignUp.update({
      where: { id },
      data: { deletedAt: new Date(), deletedBy: username },
      select: { id: true, deletedAt: true, deletedBy: true },
    });

    if (formatReturnTimeZone) {
      if (userSignUpRemove) {
        return {
          ...userSignUpRemove,

          deletedAt: this.dbService.formatTimeZone(userSignUpRemove.deletedAt),
        };
      }
    }
    return userSignUpRemove;
  }
}
