import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const routes: Routes = [

    
    {path:'Login',component:LoginComponent},
    {path:'Restaurant',component:RestaurantComponent}
];
