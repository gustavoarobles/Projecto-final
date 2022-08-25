import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  transform(value:string): any {
    value=value.toString();
    const year= value.substring(0,4);
    const math= value.substring(4,6);
    const day= value.substring(6,8);
    const date= `${day}-${math}-${year}`;
    let getWeekday = (s) => {
      const [dd, mm, yyyy] = s.split('-'),
      date = new Date(yyyy, mm - 1, dd);
      return date.toLocaleDateString('es-AR', { weekday: 'long' });
    };
   return getWeekday(date)+' '+day;
  }

}
