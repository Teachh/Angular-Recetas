import { Component } from '@angular/core';

import { ReceptaService } from './recepta.service';
import { ValoracioService } from './valoracio.service';
// formulario
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'recetas';
  // declarar vacio para que no salte error
  recetas = null;
  valoraciones = null
  // FORM
  // https://www.concretepage.com/angular-2/angular-2-formcontrol-example
  // form de crear nuevo
  nombre = new FormControl('',Validators.required);
  descripcion = new FormControl('',Validators.required);
  ingredientes = new FormControl('',Validators.required);

  receta = new FormControl('',Validators.required);
  comentario = new FormControl('',Validators.required);
  estrellas = new FormControl('',Validators.required);

  // CONSTRUCTOR de valoraciones
  valoracionesConstr = new ValoracioService;
  // CONSTRUCTOR de recetas
  recetasConst = new ReceptaService;

  // FUNCIONES
  // funcion para iniciar
  ngOnInit() {
    this.valoraciones = this.valoracionesConstr.retornar();
    this.recetas = this.recetasConst.retornar();
  }

  // pasarle a una funcion
  crearReceta() {
    this.recetasConst.crearReceta(this.nombre.value,this.descripcion.value,this.ingredientes.value);
    this.nombre.setValue('');
    this.descripcion.setValue('');
    this.ingredientes.setValue('');
  }

  crearComentario(){
    this.valoracionesConstr.crearComentario(this.receta.value,this.comentario.value,this.estrellas.value);
    this.receta.setValue('');
    this.comentario.setValue('');
    this.estrellas.setValue('');
  }

}
