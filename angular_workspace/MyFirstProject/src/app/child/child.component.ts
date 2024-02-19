import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  @Input()MyinputData:string=''

  @Output() myoutput:EventEmitter<string>=new EventEmitter()

  outputMsg='This is msg from the Child'

  sendChildData()
  {
    this.myoutput.emit(this.outputMsg)
  }
}
