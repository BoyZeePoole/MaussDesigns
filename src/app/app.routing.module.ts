import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  { path: 'login', loadChildren:  './login/login.module#LoginModule' },  
  { path: 'home', loadChildren:  './home/home.module#HomeModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsModule' },  
  // { path: 'people', loadChildren: './people/people.module#PeopleModule' },
  // { path: 'courses', loadChildren:  './courses/courses.module#CoursesModule' },
  // { path: 'role', loadChildren:  './role/role.module#RoleModule' },  
  // { path: 'roles', loadChildren:  './roles/roles.module#RolesModule' },
  // { path: 'course', loadChildren:  './course/course.module#CourseModule' }, 
  // { path: 'personcourses', loadChildren:  './person-courses/person-courses.module#PersonCoursesModule' },  
  // { path: 'personcoursesupdate', loadChildren:  './person-course-update/person-course-update.module#PersonCourseUpdateModule' },  
  // { path: 'reports', loadChildren:  './reports/reports.module#ReportsModule' }, 
  // { path: 'reportsactive', loadChildren:  './report-active/reports-active.module#ReportsActiveModule' }, 
  // { path: 'stats', loadChildren:  './stats/stats.module#StatsModule' }, 
  // { path: 'statsinactive', loadChildren:  './stats-inactive/stats-inactive.module#StatsInActiveModule' }, 
  // { path: 'generalreport', loadChildren:  './report-general/report-general.module#ReportGeneralModule' }, 
{ path: '', redirectTo: 'home', pathMatch: 'full' },
//{ path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
//export const routing = RouterModule.forRoot(routes, { useHash: false });  