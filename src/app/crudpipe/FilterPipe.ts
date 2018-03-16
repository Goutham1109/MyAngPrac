import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})



export class FilterPipe implements PipeTransform{
    transform(games: any, search: any): any {
        if(search === undefined)
          return games;
      
          return games.filter(function(games){
            return games.name.toLowerCase().includes(search.toLowerCase());
          }) 
    
      } 
}
// export class FilterPipe implements PipeTransform{
//     transform(value: any,ip :string)
//     {
//         if(ip){
//             ip=ip.toLowerCase();
//             return value.filter((el)=>{
//                  return el.first_name.toLowerCase().indexOf(ip)>-1;
//             })
//         }
//     return value;
//     }
// }