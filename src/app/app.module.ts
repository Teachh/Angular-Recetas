import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReceptaService } from './recepta/recepta.service';
import { ValoracioService } from './recepta/valoracio.service';
import { ReceptaComponent } from './recepta/recepta.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Buscador
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ReceptaComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [
    // OPCIONAL
    ValoracioService,
    ReceptaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
