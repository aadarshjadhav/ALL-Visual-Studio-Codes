import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {path:'SignUp',component:SignUpComponent},
    {path:'CustomerView',component:CustomerViewComponent},
    {path:'AdminView',component:AdminViewComponent},
    {path:'Login',component:LoginComponent}
    
];
