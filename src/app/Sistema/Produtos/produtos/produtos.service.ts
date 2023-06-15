import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  private readonly API = `${API}/produtos`;

  listarprodutos(): Observable<any> {
    return this.http.get<any>(this.API);
  } 

}
