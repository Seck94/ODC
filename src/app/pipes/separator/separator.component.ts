import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Pipe({
  name: 'separateur'
})
export class SeparatorComponent implements PipeTransform {

  constructor(private utilsService: UtilsService) { }

  transform(value: number, sep: string): string {
    return this.utilsService.numberSeparator(value, sep);
  }

}
