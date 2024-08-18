import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lettersOnlyValidator } from '../custom-validator/lettersOnlyValidator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  selectedCoutry:any = "+966"
  phoneNumberFocus : boolean = false
  companySizeFocus : boolean = false
  passwordType: boolean = false
  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3),lettersOnlyValidator()]],
      businessemail: ['', [Validators.required, Validators.email]],
      phonenumber:[''],
      companysize:['',Validators.required],
      password:['',Validators.required],
    });
  }

  onSubmit(){
    
  }

  companySizes = [
    '0 - 25',
    '25 - 100',
    '100 - 250',
    '250 - 1000',
    '1K - 10K',
    '10K - 50K',
    '50K - 100K'
  ]
  
  countryCodes = [
    '966',
    '20',
    '634',
    '646'
  ]

  selectCountry(item){
    this.selectedCoutry = item
  }
  onFocusPhoneNumber(){
    this.phoneNumberFocus = !this.phoneNumberFocus
  }
  selectCompanySize(item){
    this.signUpForm.patchValue({
      companysize : item  
    })
  }
  onFocusCompanySize(){
    this.companySizeFocus = !this.companySizeFocus
  }
  onCompantSizeClick(): void {
    this.signUpForm.get('companysize')?.markAsTouched();
  }

  togglePasswordType(){
    this.passwordType = !this.passwordType
  }
}
