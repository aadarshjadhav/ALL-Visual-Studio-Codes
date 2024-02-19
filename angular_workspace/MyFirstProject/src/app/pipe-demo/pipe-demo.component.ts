import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WordCountPipe } from '../word-count.pipe';
import { PowerBasePipe } from '../power-base.pipe';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule,WordCountPipe,PowerBasePipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {

  msg:string="Today is not a good day"

  amount:number=70000

  today=new Date()

  base:number=10

  show(...a:number[]):void
 {
    for(let i=0;i<a.length;i++)
    {
        console.log(a[i])
    }
 }

}
