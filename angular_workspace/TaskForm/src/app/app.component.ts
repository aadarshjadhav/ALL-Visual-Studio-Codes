import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ChickbuttermasalaComponent } from './chickbuttermasala/chickbuttermasala.component';
import { GoogleComponent } from './google/google.component';
import { TributeComponent } from './tribute/tribute.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,RouterModule,RestaurantComponent,ChickbuttermasalaComponent,GoogleComponent,TributeComponent,ChessBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskForm';
}
