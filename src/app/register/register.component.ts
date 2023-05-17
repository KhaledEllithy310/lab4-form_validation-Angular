import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  passValue!: string;
  confirmPassValue!: string;
  constructor(private fb: FormBuilder) {
    // this.passValue = this.registerForm.controls['Password'].value;
    // this.confirmPassValue = this.registerForm.controls['ConfirmPassword'].value;

    this.registerForm = this.fb.group({
      Email: [
        '',
        [
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
        ],
      ],
      Password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/),
        ],
      ],
      Name: ['', [Validators.required]],
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\S+$/),
          // Validators.requiredTrue(this.confirmPassValid()),
        ],
      ],
    });
  }

  submitRegiterForm() {
    console.log(this.registerForm);
  }

  // confirmPassValid() {
  //   let Valid = false;
  //   let passValue = this.registerForm.controls['Password'].value;
  //   let confirmPassValue = this.registerForm.controls['ConfirmPassword'].value;
  //   if (passValue !== confirmPassValue) {
  //     Valid = true;
  //   }
  //   console.log('passValue:', passValue);
  //   console.log('confirmPassValue:', confirmPassValue);
  //   console.log('registerForm.valid:', this.registerForm.valid);
  //   console.log('registerForm.invalid:', this.registerForm.invalid);
  //   console.log('notValid:', Valid);

  //   return Valid;
  // }
}
