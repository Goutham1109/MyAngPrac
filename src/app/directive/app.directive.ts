import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCopypaste]'
})
export class CopypasteDirective {

  constructor(el: ElementRef) { 
     el.nativeElement.onpaste=function(e){
      console.log("pls dont copy paste paste");
      
         e.preventDefault();
}
  } 
}