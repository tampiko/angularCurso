import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [
    TareasComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
