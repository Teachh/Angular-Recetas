import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

//valoraciones
var valoraciones = [
  {
    nombre: "Receta1",
    comentario: 'Me ha gustado mucho',
    estrellas: 5
  }
];

export class ValoracioService {

  constructor() { }

  crearComentario(nombre: string, comentario: string, estrellas: number){
    valoraciones.push({nombre: nombre, comentario: comentario, estrellas: estrellas});
  }

  retornar(){
    return valoraciones;
  }
}
