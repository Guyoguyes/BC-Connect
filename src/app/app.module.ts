import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterService } from './service/register.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { JwtModule } from '@auth0/angular-jwt';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { RecoverComponent } from './client/recover/recover.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainRegisterComponent } from './main-register/main-register.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { RegComponent } from './servicepro/reg/reg.component';
import { LogComponent } from './servicepro/logi/log.component';
import { ProComponent } from './servicepro/pro/pro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './client/profile/profile.component';
import { AuthInterceptor } from './service/authconfig.interceptor';
import { RegisterGuard } from './guard/register.guard';
import { ReqServiceComponent } from './req-service/req-service.component';

// export function tokenGetter(){
//   return localStorage.getItem('access_token')
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    HomeComponent,
    NavbarComponent,
    MainRegisterComponent,
    MainLoginComponent,
    RegComponent,
    LogComponent,
    ProComponent,
    DashboardComponent,
    ProfileComponent,
    ReqServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    // JwtModule.forRoot({
    //   config:{
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains:['localhost:3000'],
    //     blacklistedRoutes:['localhost:3000/serciver/authenticate']
    //   }
    // })
  ],
  providers: [RegisterService, FlashMessagesService, AuthInterceptor, RegisterGuard],
  bootstrap: [AppComponent]
})


export class AppModule { }
