import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import{ RouterModule, Routes } from '@angular/router'

import { MatDatepickerModule,
          MatInputModule,
          MatFormFieldModule,
          MatNativeDateModule,
          MatSelectModule,
          MAT_DATE_LOCALE
 } from '@angular/material';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service';
import { PrestationComponent } from './prestation/prestation.component';
import { PictureComponent } from './picture/picture.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReserveComponent } from './reserve/reserve.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'reserve', component: ReserveComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'prestation', component: PrestationComponent},
  { path: 'picture', component: PictureComponent},
  { path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PrestationComponent,
    PictureComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule

  ],
  providers: [AuthenticationService, AuthGuardService,{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
