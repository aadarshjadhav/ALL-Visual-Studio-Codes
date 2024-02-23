import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { GoogleComponent } from './google/google.component';
import { TributeComponent } from './tribute/tribute.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';

export const routes: Routes = [

    
    {path:'Login',component:LoginComponent},
    {path:'Restaurant',component:RestaurantComponent},
    {path:'Google',component:GoogleComponent},
    {path:'Tribute',component:TributeComponent},
    {path:'ChessBoard',component:ChessBoardComponent}
    

];
