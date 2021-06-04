import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent   implements OnInit{
  
  nombre: string;
  registerForm:FormGroup;

  constructor(private fb: FormBuilder, private usuarioService:UsuarioService, ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'nombre':[''],
      'mail':[''],
      'contacto':[''],
      'pass1':[''],
      'pass2':[''],
      // userPassword: new FormControl(this.userPassword)
    });
  }
  
  crearUsuario(){
    this.usuarioService.getPersona(this.registerForm.get("userLabel").value).subscribe(data => {
      console.log(data);
      // localStorage.setItem(“nombrePersona”, data.);
    });
  }

  

}
