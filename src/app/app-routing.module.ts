import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 's',
  pathMatch: 'full'
},
{
  path: 'clientes',
  component: ClientesComponent
},

{
  path: 'proyectos',
  component: ProyectosComponent
},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
