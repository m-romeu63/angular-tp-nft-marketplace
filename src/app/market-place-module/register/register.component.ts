import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  public login ='';
  public email ='';
  public password ='';

  public registerFormGroup = this.formBuilder.group({
    login: ['', [Validators.required, Validators.minLength(3)]],
    email: [
      '',
      [Validators.required, Validators.email, Validators.minLength(3)],
    ],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });



  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmitRegister(): void {
    console.dir(this.registerFormGroup.value);
    this.router.navigate(['']);
  }
}
