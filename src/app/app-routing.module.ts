import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { UseridComponent } from './userid/userid.component';



const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'registraion', component: RegistrationComponent },
  { path: 'signup', component: SignUpComponent, },
  { path: 'todos', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'userid', component: UseridComponent },
  { path: 'todos/:id', component: UserDetailsComponent, },
  { path: 'profile', component: ProfileComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
