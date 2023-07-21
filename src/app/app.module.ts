import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LoginreportComponent } from './loginreport/loginreport.component';
import { AgGridModule } from 'ag-grid-angular';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { BiometricreportComponent } from './biometricreport/biometricreport.component';
import { LeaveManagementComponent } from './leave-management/leave-management.component';
import { LeaverecordComponent } from './leave-management/leaverecord/leaverecord.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginreportComponent,
    BiometricreportComponent,
    LeaveManagementComponent,
    LeaverecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [
    AppService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
