import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListColorsComponent } from './list-colors/list-colors.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListColorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MockProject';
}
