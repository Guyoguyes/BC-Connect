import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './client/service/register.service';


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
    ProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
