import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material/material.module';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOtpInputModule } from 'ng-otp-input';
import { AntDesignModule } from 'src/app/ant-design/ant.module';
import { AuthRoutingModule } from './auth-routing.module';
import { DataTableComponent } from './data-table/data-table.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { DownloadPdfComponent } from './download-pdf/download-pdf.component';
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    AntDesignModule,
    NgOtpInputModule,
    NgSelectModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    SetNewPasswordComponent,
    DataTableComponent,
    OtpComponent,
    TreeViewComponent,
    DownloadPdfComponent,
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
