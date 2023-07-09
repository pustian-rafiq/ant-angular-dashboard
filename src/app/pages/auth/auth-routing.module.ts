import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { DownloadPdfComponent } from './download-pdf/download-pdf.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { RegisterComponent } from './register/register.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'd3-tree-view', component: TreeViewComponent },
  { path: 'set-new-password', component: SetNewPasswordComponent },
  { path: 'table', component: DataTableComponent },
  { path: 'download-pdf', component: DownloadPdfComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
