import { Component, OnInit } from '@angular/core';

interface Tarea {
  titulo: string;
  descripcion: string;
  estatus: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  listado: Tarea[] = [
    {
      titulo: 'prioridad',
      descripcion: 'ordenar las prioridades',
      estatus: 'en proceso',
    },
    {
      titulo: 'login',
      descripcion: 'crear un login con google',
      estatus: 'registrado',
    },
    {
      titulo: 'paginacion',
      descripcion: 'implementar la paginacion en el listado de tareas',
      estatus: 'completado',
    },
    {
      titulo: 'reportes',
      descripcion: 'generar los reportes semanales',
      estatus: 'en proceso',
    },
    {
      titulo: 'bug en registro',
      descripcion: 'la aplicacion no muestra los datos correctamente',
      estatus: 'completado',
    },
    {
      titulo: 'colores de la aplicacion',
      descripcion: 'colocar los colores de la pagina de acuerdo a la fecha',
      estatus: 'registrado',
    },
    {
      titulo: 'iconos de la aplicacion',
      descripcion: 'cambiar los iconos de la pagina de acuerdo a la fecha',
      estatus: 'registrado',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.listado);
  }
}
