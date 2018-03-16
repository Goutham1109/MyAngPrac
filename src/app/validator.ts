import{AbstractControl} from '@angular/forms';

export function emailpat(control : AbstractControl){

    if(control.value==null){
        return   {submitted : false}
            }
}
