import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre: string;
  loginForm:FormGroup;
  constructor(private fb: FormBuilder, private usuarioService:UsuarioService, ) { }
  
  ngOnInit(): void {
    const validators = [Validators.required, Validators.minLength(8)]
    this.loginForm = this.fb.group({
      'userLabel': ['', validators],
      'userPassword': ['', validators]
      // userPassword: new FormControl(this.userPassword)
    });
  }

  crearUsuario(){
    this.usuarioService.getPersona(this.loginForm.get("userLabel").value).subscribe(data => {
      console.log(data);
      // localStorage.setItem(“nombrePersona”, data.);
    });
  }

}
