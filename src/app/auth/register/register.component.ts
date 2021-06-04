import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent {

  public registerForm = this.fb.group({
    nombre:['', Validators.required, Validators.minLength(8)],
    password:['', Validators.required, Validators.minLength(8)]
  });

  constructor(private fb: FormBuilder) { }

  

}
