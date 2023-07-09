import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
const AntDesignComponentModule = [
  NzModalModule,
  NzButtonModule,
  NzDividerModule,
];
@NgModule({
  imports: [AntDesignComponentModule],
  exports: [AntDesignComponentModule],
})
export class AntDesignModule {}
