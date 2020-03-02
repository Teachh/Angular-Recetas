import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe  implements PipeTransform {
  transform(array: any, field: string): any[] {
    let invertido: boolean = false;
    if(field.includes('-')){
      invertido = true;
      field = field.substr(1);
    }
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    if(invertido){
      return array.reverse();
    }
    return array;
  }
}
