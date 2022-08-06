import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ManageClassAndSubjectComponent } from './pages/manage-class-and-subject/manage-class-and-subject.component';
import { ManageClassSubjectsCardComponent } from './components/manage-class-subjects-card/manage-class-subjects-card.component';
import { ManageStudentsComponent } from './pages/Students/manage-students/manage-students.component';
import { IndexStudentsComponent } from './pages/Students/index-students/index-students.component';
import { AddStudentsComponent } from './pages/Students/add-students/add-students.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { IndexTeachersComponent } from './pages/Teachers/index-teachers/index-teachers.component';
import { ManageTeachersComponent } from './pages/Teachers/manage-teachers/manage-teachers.component';
import { AddTeachersComponent } from './pages/Teachers/add-teachers/add-teachers.component';
import { AddAdminStaffComponent } from './pages/AdminStaff/add-admin-staff/add-admin-staff.component';
import { ManageAdminStaffComponent } from './pages/AdminStaff/manage-admin-staff/manage-admin-staff.component';
import { IndexAdminStaffComponent } from './pages/AdminStaff/index-admin-staff/index-admin-staff.component';
import { LoginComponent } from './components/login/login.component';

// Login

import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AuthService } from './service/auth.service';
import { Router, Routes } from '@angular/router';
// import { AppInitService } from './service/app-init.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HeaderComponent,
    ManageClassAndSubjectComponent,
    ManageClassSubjectsCardComponent,
    ManageStudentsComponent,
    IndexStudentsComponent,
    AddStudentsComponent,
    AlumniComponent,
    IndexTeachersComponent,
    ManageTeachersComponent,
    AddTeachersComponent,
    AddAdminStaffComponent,
    ManageAdminStaffComponent,
    IndexAdminStaffComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['example.com'],
        disallowedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
