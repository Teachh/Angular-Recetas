import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// recetas
var recetas = [
  {
    nombre: "Receta1",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ingredientes: "Patatas, zanahorias, verduras, pollo"
  },
  {
    nombre: "Receta2",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ingredientes: "Patatas, zanahorias, verduras, pollo"
  },
  {
    nombre: "Receta3",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ingredientes: "Patatas, zanahorias, verduras, pollo"
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
