import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private uri = 'http://' + window.location.hostname + ':8080/api';
 
  constructor(
    private http: HttpClient
  ) { }

  public save(cliente){
   return this.http.post(this.uri + '/enviar', cliente)
  }

  public findAll(){
    return this.http.get<any>(this.uri + '/clientes/')
  }
  
}
