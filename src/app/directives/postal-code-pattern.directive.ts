import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';   
import { CustomvalidationsService } from '../services/custom-validations.service'; 

@Directive({
  selector: '[appPostalCodePattern]',    
  providers: [{ provide: NG_VALIDATORS, useExisting: PostalCodePatternDirective, multi: true }]
})

export class PostalCodePatternDirective implements Validator {  
  @Input('appPostalCodePattern') PostalCodeValidator: string;  
    
  constructor(private customValidator: CustomvalidationsService) { }    
    
  validate(control: AbstractControl): { [key: string]: any } | null {    
    return this.customValidator.PostalCodeValidator(this.PostalCodeValidator)(control);    
  }  
}
