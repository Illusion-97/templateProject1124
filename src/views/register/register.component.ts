import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {AbstractFormComponent} from '../../tools/abstract-form-component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends AbstractFormComponent {

  passwordControl: FormControl = new FormControl("", {validators: [
      Validators.required,
      //this.password,
      Validators.minLength(6)
    ]})
  confirmPasswordControl : FormControl = new FormControl<any>("", {validators: [
    Validators.required,
      this.mustMatch(this.passwordControl)
    ]})

  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    username: new FormControl("", {validators: [Validators.required]}),
    email: new FormControl("", {validators: [Validators.required, Validators.email]}),
    password: this.passwordControl
  })

  onSubmit$(): void {
    console.log("USER : ", this.form.value)
  }
}

export interface User {
  id: number,
  username: string,
  email: string,
  password: string
}
