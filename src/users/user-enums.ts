// export enum UserRole {
//   ADMIN = 'ADMIN',
//   AUDITOR = 'AUDITOR',
//   CUSTOMER = 'CUSTOMER',
//   EMPLOYEE = 'EMPLOYEE',
//   SUPPLIER = 'SUPPLIER',
//   TRANSPORTER = 'TRANSPORTER',
// }

// export enum UserPrivilege {
//   // Privileges for CUSTOMER, SUPPLIER and TRANSPORTER ONLY.
//   CST_EDITOR = 'CST_EDITOR', // CR, Request data manipulation.
//   CST_MANAGER = 'CST_MANAGER', // CRUD. Grant privilege to its users.
//   CST_VIEWER = 'CST_VIEWER', // Read records.

//   // Privileges for EMPLOYEE
//   EMP_MANAGER = 'EMP_MANAGER', // CRUD records, Grant/Reject Request(data manipulation)
//   EMP_EDITOR = 'EMP_EDITOR', // CR, Request data manipulation
//   EMP_INTERN = 'EMP_INTERN', // CR on limited entities.

//   // Privileges for AUDITOR
//   AUD_VIEWER = 'AUD_VIEWER', // Read on unlimited entities.

//   // Privileges for ADMIN
//   ADM_OWNER = 'ADM_OWNER', // CRUD data, Grant/Reject Request (unlimited user and data)
//   ADM_MANAGER = 'ADM_MANAGER', // CRUD data, Grant/Reject Request (limited user and data)
//   ADM_DEVELOPER = 'ADM_DEVELOPER', // CRUD data with remarks/tag for testing purpose, Grant/Reject Request (unlimited user and data with remarks/tag)
// }
