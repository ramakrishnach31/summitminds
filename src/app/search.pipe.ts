import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  
})
export class SearchPipe implements PipeTransform {

  transform(prizes: any, find: string): any {
    
    
    if(find === undefined){
      
      
      return prizes;
    }
    else{
      return prizes.filter(
                             function(x){
                               const name= x.empname.toString().toLowerCase()
                                               .indexOf(find.toLowerCase())!== -1;
                               const salary= x.sal.toString().toLowerCase()
                                               .indexOf(find.toLowerCase())!== -1;
                               const id= x.id.toString().toLowerCase()
                                               .indexOf(find.toLowerCase())!== -1;
                              return ((+name) + (+salary) +(+id));
                              
                             }
              
                             )
    }
  }

}
