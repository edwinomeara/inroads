import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home/home.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { CompanyPageComponent } from './company-page/company-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: 'studentPage',
    component: StudentPageComponent
  },
  {
    path: 'companyPage',
    component: CompanyPageComponent
  },
  {
    path: 'studentRegistration',
    component: StudentRegistrationComponent
  },
  {
    path: 'companyRegistration',
    component: CompanyRegistrationComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
