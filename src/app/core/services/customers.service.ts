import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  map } from 'rxjs/operators';

// Ambiente
import { environment } from 'src/environments/environment';
import { Cliente, Estado, Pais, PeticionCliente } from '@dtos/clientes';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  url: string = environment.apiUrl;


  constructor(
    private readonly http: HttpClient,
  ) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      "Content-Type": "application/json"
    });
  };

  getCountries(){
    const headers = this.getHeaders();
    const path = `${this.url}/paises`;
    return this.http.get<any>(path, {headers}).pipe(
      map( respuesta => {
        return respuesta.map((pais: Pais) => this.mapPais(pais))
      }
    ))
  }

  private mapPais(data: Pais): Pais {
    return {
      id: data.id.toString(),
      nombre: data.nombre
    }
  }

  getStates(idPais:string){
    const headers = this.getHeaders();
    const path = `${this.url}/estados/?pais_id=${idPais}`;
    return this.http.get<any>(path, {headers}).pipe(
      map( respuesta => {
        return respuesta.map((estado: Estado) => this.mapEstado(estado))
      }
    ))
  }

  private mapEstado(data: Estado): Estado {
    return {
      id: data.id.toString(),
      nombre: data.nombre,
      pais_id: data.pais_id
    }
  }

  getUsers(){
    const headers = this.getHeaders();
    const path = `${this.url}/usuarios`;
    return this.http.get<any>(path, {headers}).pipe(
      map( respuesta => {
        return respuesta.map((usuario: Cliente) => this.mapUsuario(usuario))
      }
    ))
  }

  private mapUsuario(data: Cliente): Cliente {
    return {
      id: data.id.toString(),
      nombre: data.nombre,
      genero: data.genero,
      pais:   data.pais,
      estado: data.estado,
      avatarSRC: data.avatarSRC
    }
  }

  newUser(user:PeticionCliente){
    const headers = this.getHeaders();
    const path = `${this.url}/usuarios`;
    return this.http.post<any>(path, user, { headers })
  }

  editUser(user:PeticionCliente, id:string){
    const headers = this.getHeaders();
    const path = `${this.url}/usuarios/${id}`;
    return this.http.put<any>(path, user, { headers })
  }

  deleteUSer(userid:string){
    const headers = this.getHeaders();
    const path = `${this.url}/usuarios/${userid}`;
    return this.http.delete<any>(path, { headers })
  }

}
