import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

const AntDesignComponentModule = [NzModalModule, NzButtonModule];
@NgModule({
  imports: [AntDesignComponentModule],
  exports: [AntDesignComponentModule],
})
export class AntDesignModule {}
