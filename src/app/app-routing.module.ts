import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { RecoverComponent } from './client/recover/recover.component';
import { HomeComponent } from './home/home.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { MainRegisterComponent } from './main-register/main-register.component';
import { LogComponent } from './servicepro/logi/log.component';
import { RegComponent } from './servicepro/reg/reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './client/profile/profile.component';
import { ProComponent } from './servicepro/pro/pro.component';
import { RegisterGuard} from './guard/register.guard';
import { ReqServiceComponent } from './req-service/req-service.component';


const routes: Routes = [
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login-client', component: LoginComponent },
  {path: 'register-client', component: RegisterComponent},
  {path: 'login-servicer', component: LogComponent},
  {path: 'register-servicer', component: RegComponent},
  {path: 'recover', component: RecoverComponent},
  {path: 'main-login', component: MainLoginComponent},
  {path: 'main-register', component: MainRegisterComponent},
  {path: 'req-service', component: ReqServiceComponent},
  {path: 'client-profile', component: ProfileComponent, canActivate:[RegisterGuard]},
  {path: 'dashboard', component: DashboardComponent},

  {path: 'servicer-profile', component: ProComponent, canActivate:[RegisterGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
