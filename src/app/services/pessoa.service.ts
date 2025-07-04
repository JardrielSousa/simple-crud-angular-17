import { Injectable } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private API = 'http://localhost:3000/pessoa';

  constructor(private http: HttpClient) { }


  listar(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API);
  }
}
