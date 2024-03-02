import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-colors',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-colors.component.html',
  styleUrl: './list-colors.component.css'
})
export class ListColorsComponent {

  colors =[

    {name:"Red",value:"red"},
    {name:"Green",value:"green"},
    {name:"Blue",value:"blue"}

  ]

}
