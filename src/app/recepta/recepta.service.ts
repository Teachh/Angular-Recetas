import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// recetas
var recetas = [
  {
    nombre: "Macarrones con tomate",
    descripcion: "Macarrones con carne picada y tomate. Una forma muy fácil y rápida de preparar pasta. Y también barata. Los tendrás listo en cuestión de 30 minutos. ¡Y el resultado será espectacular! Puedes preparar esta recete con otra pasta a tu gusto, como espagueti o tallarines. Sea como sea, probablemente termines untando en pan. ",
    ingredientes: "500g de macarrones, 500g de carne picada o molida. Mejor si es mezcla de ternera y cerdo ,500g de tomate frito (salsa de tomate), 1 cebolla, 4 dientes de ajo, orégano seco , sal y pimienta, aceite"
  },
  {
    nombre: "Lasagna",
    descripcion: "Este clásico de la cocina es famoso en todo el mundo, no sólo en Italia. Ideal para llevar en el tupper al trabajo o al cole, y que sin duda triunfa entre los más pequeños de casa.",
    ingredientes: "Muchos"
  },
  {
    nombre: "Arroz con sepia",
    descripcion: "Quizá uno de las recetas con arroz más sencillas de preparar sea este arroz con sepia. Un arroz con un gran sabor a mar, estilo seco y fácil, ¿se puede pedir más?",
    ingredientes: "Arroz y sepia"
  }
];

export class ReceptaService {

  constructor() { }

  crearReceta(nombre: string, descripcion: string, ingredientes: string){
    recetas.push({nombre: nombre, descripcion: descripcion, ingredientes: ingredientes});
  }

  retornar() {
    return recetas;
  }

}
