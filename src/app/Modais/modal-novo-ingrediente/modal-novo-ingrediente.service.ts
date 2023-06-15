import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API = environment.API;

@Injectable({
  providedIn: 'root'
})
export class ModalNovoIngredienteService {

  constructor(private http: HttpClient) { }

  private readonly API = `${API}/ingrediente`;


  create(ingrediente: any){
    return this.http.post(this.API, ingrediente);
  }
}