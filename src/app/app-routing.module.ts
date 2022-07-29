import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminStaffComponent } from './pages/AdminStaff/add-admin-staff/add-admin-staff.component';
import { IndexAdminStaffComponent } from './pages/AdminStaff/index-admin-staff/index-admin-staff.component';
import { ManageAdminStaffComponent } from './pages/AdminStaff/manage-admin-staff/manage-admin-staff.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageClassAndSubjectComponent } from './pages/manage-class-and-subject/manage-class-and-subject.component';
import { AddStudentsComponent } from './pages/Students/add-students/add-students.component';
import { IndexStudentsComponent } from './pages/Students/index-students/index-students.component';
import { ManageStudentsComponent } from './pages/Students/manage-students/manage-students.component';
import { AddTeachersComponent } from './pages/Teachers/add-teachers/add-teachers.component';
import { IndexTeachersComponent } from './pages/Teachers/index-teachers/index-teachers.component';
import { ManageTeachersComponent } from './pages/Teachers/manage-teachers/manage-teachers.component';

// Routing

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'manage-class-and-subjects',
    component: ManageClassAndSubjectComponent,
  },
  {
    path: 'students',
    component: IndexStudentsComponent,
    children: [
      { path: 'manage', component: ManageStudentsComponent },
      { path: 'add', component: AddStudentsComponent },
    ],
  },
  { path: 'manage-alumni', component: AlumniComponent },
  {
    path: 'teachers',
    component: IndexTeachersComponent,
    children: [
      { path: 'manage', component: ManageTeachersComponent },
      { path: 'add', component: AddTeachersComponent },
    ],
  },
  {
    path: 'admin-staff',
    component: IndexAdminStaffComponent,
    children: [
      { path: 'manage', component: ManageAdminStaffComponent },
      { path: 'add', component: AddAdminStaffComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
