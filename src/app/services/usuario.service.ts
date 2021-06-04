import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario.model';
import { RegisterForm } from '../interface/register-form.interface';


// import { Headers } from '@angular/http';

@Injectable({ providedIn: 'root' })


    export class UsuarioService {
        
        headers: HttpHeaders;

        constructor(private http: HttpClient) {
            this.headers = new HttpHeaders();
    
        }

    crearUsuario(formData: RegisterForm){
        this.http.post(`${environment.apiUrl}/admin/usuario`, formData);
    }

    get(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${environment.apiUrl}/admin/usuario/list`);
    }
    getPersona(dni): Observable<object> {
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set("Authorization", "token " + "f38e39a15f939713f5e68d86b4a05fedccc12a71");

        return this.http.get<object>(`${environment.apiDni}/` + dni, { headers: this.headers });
        // return this.http.get<Usuario[]>(`${environment.apiUrl}/admin/usuario/list`, {headers:this.headers});
    }
    create(obj): Observable<Usuario>{
        return this.http.post<Usuario>(`${environment.apiUrl}/admin/usuario`, obj);
    }
    update(obj): Observable<Usuario> {
        return this.http.post<Usuario>(`${environment.apiUrl}/admin/persona/update`, obj);
    }
    delete(obj): Observable<Usuario> {
        return this.http.post<Usuario>(`${environment.apiUrl}/admin/persona/delete`, obj);
    }
    
    
}
