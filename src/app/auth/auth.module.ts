import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent
    ],
    exports:[
        LoginComponent,
        RegisterComponent,
        FormsModule,
        ReactiveFormsModule
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class AuthModule{

}