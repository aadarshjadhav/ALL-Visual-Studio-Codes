import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-demo.component.html',
  styleUrl: './attribute-demo.component.css'
})
export class AttributeDemoComponent {

  isbold:boolean=true
  isitalic:boolean=true

  appleFun()
  {
    let customcssclass={
      boldClass:this.isbold,
      italicClass:this.isitalic
    }
    return customcssclass
  }


  //NG STYLE
  color:string='red'
  fontsize:number=50

  appleStyle()
  {
    let style={

      'color':this.color,
      // 'font-weight':this.isbold?'bold':'normal',
      'font-size.px':this.fontsize

    }
    return style
  }
}
