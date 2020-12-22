import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  numberSeparator(nbr: number, sep: string){
    let nombre: string = nbr.toString();
    var reg = /(\d+)(\d{3})/;
    while( reg.test( nombre)) {
      nombre = nombre.replace( reg, '$1' + sep + '$2');
    }
    return nombre;
  }
  // getTimeLeft(endtime: any): any{
  //   let now = new Date();
  //   let total = Date.parse(endtime) - Date.parse(now.toDateString());
  //   let seconds = Math.floor( (total / 1000) % 60 );
  //   let minutes = Math.floor( (total / 1000 / 60) % 60 );
  //   let hours = Math.floor( (total / ( 1000 * 60 * 60)) % 24 );
  //   let days = Math.floor( total / (1000 * 60 * 60 * 24) );

  //   return {
  //     total,
  //     days,
  //     hours,
  //     minutes,
  //     seconds
  //   };
  // }
}
