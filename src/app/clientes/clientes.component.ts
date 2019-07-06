import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  public nombre_Cliente;
  public product_Owner;

  public clientes;

  constructor(
    private clienteService : ClientesService
  ) { }
    
  ngOnInit() {
    this.clienteService.findAll()
    .subscribe(response => {
      console.log(response)
      this.clientes = response;
    });
  }

  public enviar(){
    const cliente = {
      "nombre_Cliente": this.nombre_Cliente,
      "product_Owner": this.product_Owner
    };

    this.clienteService.save(cliente)
        .subscribe(response => {
          console.log(response);
        })
  }

}
