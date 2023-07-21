import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';

const routes: Routes = [{ path: "", component: HomeComponent }, { path: "leavemanagement", component: LeaveManagementComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
