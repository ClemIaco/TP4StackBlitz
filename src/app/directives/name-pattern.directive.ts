import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';   
import { CustomvalidationsService } from '../services/custom-validations.service';  

@Directive({
  selector: '[appNamePattern]',    
  providers: [{ provide: NG_VALIDATORS, useExisting: NamePatternDirective, multi: true }] 
})
export class NamePatternDirective implements Validator {  
  @Input('appNamePattern') NameValidator: string;  
    
  constructor(private customValidator: CustomvalidationsService) { }    
    
  validate(control: AbstractControl): { [key: string]: any } | null {    
    return this.customValidator.NameValidator(this.NameValidator)(control);    
  }  
}
