import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeleft'
})
export class TimeLeftComponent implements PipeTransform {
  transform(value: Date): string{

    const currentTime = new Date();
    const diff = currentTime.getTime() - value.getTime();
    const y = Math.floor(diff / 1000 / 60 / 60 / 24 / 365 );
    if(y > 0)return y + 'a';
    const d = Math.floor(diff / 1000 / 60 / 60 / 24)  ;
    if(d > 0)return y + 'j';
    const h = Math.floor((diff / 1000 / 60 / 60 ) % 24) ;
    if(h > 0)return y + 'h';
    const m = Math.floor((diff / 1000 / 60 ) % 60)  ;
    if(m > 0)return y + 'm';
    const s = Math.floor((diff / 1000) % 60 ) ;
    if(s > 0)return y + 'sec';
    return '2s';
  }


}
