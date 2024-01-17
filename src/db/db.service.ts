import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DbService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  formatTimeZone(datetime: Date, localeStr: string = 'id-ID'): string {
    // datetime argument string: 2024-01-11T16:15:18.584Z
    const dt = datetime.toISOString();

    // set date
    const dx = new Date(dt).toLocaleDateString(localeStr); // d/m/yyyy
    const dxe = dx.split('/');

    if (+dxe[0] <= 9) dxe[0] = '0' + dxe[0]; // add leading zero day
    if (+dxe[1] <= 9) dxe[1] = '0' + dxe[1]; // add leading zero month

    const d = dxe[2] + '-' + dxe[1] + '-' + dxe[0];

    // set time
    const tx = new Date(dt).toLocaleTimeString(localeStr); // hh.mm.ss
    const txe = tx.split('.');

    // get ss.ms
    const ssms = dt.split('T')[1].split(':')[2].substring(0, 6);

    const t = txe[0] + ':' + txe[1] + ':' + ssms;

    return d + ' ' + t;
  }

  getRecordStateCriteria(excludeDeletedRecord: boolean = true) {
    // recordState object use to show/hide deleted record.
    let recordState = {};
    if (excludeDeletedRecord)
      recordState = { deletedAt: null, deletedBy: null };

    return recordState;
  }
}
