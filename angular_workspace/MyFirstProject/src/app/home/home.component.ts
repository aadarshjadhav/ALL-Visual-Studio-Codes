import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cityname:string = "Pune"
  num:number=7

  path:string='./assets/Custom.PNG'

  name:string='Rajesh'

  msg:string='Hi '
  getData():string{

    return 'This is Interpolationn'
  }
  isdisabled:boolean=true

  onMyClick(){
    // console.log("You clickked")
    this.msg=this.msg+" "+ "You clicked!"

  }

  //Vararaible data from two way data binding
  data:string=""

  show:boolean=false
  

}
