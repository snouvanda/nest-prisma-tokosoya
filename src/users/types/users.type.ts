import { UserPrivilegeEnum, UserRoleEnum } from '@prisma/client';

export type User = {
  id: number;
  username: string;
  email: string;
  fullname: string;
  phonesms: string;
  whatsapp: string;
  corporateId: string;

  // Authentication
  salt?: string;
  password?: string;

  // Authorization
  role: UserRoleEnum;
  privilege: UserPrivilegeEnum;
  isActive: boolean;

  // METADATA
  createdAt: string | Date;
  createdBy: string;

  updatedAt: string | Date;
  updatedBy: string;
};
