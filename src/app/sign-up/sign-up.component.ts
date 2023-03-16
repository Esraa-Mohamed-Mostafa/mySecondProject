import { Component, ElementRef, ViewChild } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../confirmpassword';
import { AbstractControl, ValidatorFn } from "@angular/forms";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  userform: FormGroup;
  constructor(private fb: FormBuilder) { }
  userForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    phone: [''], gender: [''],
  },
    { validator: [confirmPasswordValidator] })
  get f() { return this.userForm.controls; }

  //userModel = new user('', '', '123', '123', '', '', 'female')
  setPatternValidator() {
    this.userForm.get('email')?.setValidators(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"));
  }


  firstNamee: string[] = ['esraa'];
  msg: string;

  onSubmit(box: string, txt: any) {
    if (this.firstNamee.includes(box) == true) { txt.innerText = "Username taken" }
    else { this.firstNamee.push(box); txt.innerText = "" };


  }
}

