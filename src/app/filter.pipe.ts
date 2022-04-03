import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(value: any, filterString:string) {
    
    if(value.length === 0 ||filterString ==="")
    {
      return value;
    }

    const speakers = [];
    for (const speaker of value) {
      if(speaker.fullName === filterString)
      {
          speakers.push(speaker)

      }
    }
          return speakers;
 
  }

}
