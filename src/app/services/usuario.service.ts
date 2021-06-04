import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { Usuario } from '../models/usuario.model';


// import { Headers } from '@angular/http';

@Injectable({ providedIn: 'root' })


    export class UsuarioService {
        
    constructor(private http: HttpClient, private headers: HttpHeaders) {
        this.headers.append("Authorization", "token " + "f38e39a15f939713f5e68d86b4a05fedccc12a71")
    }

    get(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(`${environment.apiUrl}/admin/usuario/list`);
    }
    getPersona(dni): Observable<object>{
        return this.http.get<object>(`${environment.apiDni}/`+ dni, {headers:this.headers});
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
