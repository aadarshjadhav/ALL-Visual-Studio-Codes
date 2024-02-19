import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerBase',
  standalone: true
})
export class PowerBasePipe implements PipeTransform {

  transform(base: number, power: number): number {
  let result=1;
    for(let i=1;i<=power;i++)
    {
      result=result*base
    }
    return result;
  }

    

}
