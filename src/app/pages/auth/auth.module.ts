import { NgModule } from '@angular/core';
import { MaterialModule } from './../../material/material.module';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { DataTableComponent } from './data-table/data-table.component';
@NgModule({
  imports: [CommonModule, AuthRoutingModule, MaterialModule, NgSelectModule],
  declarations: [LoginComponent, RegisterComponent, SetNewPasswordComponent, DataTableComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
