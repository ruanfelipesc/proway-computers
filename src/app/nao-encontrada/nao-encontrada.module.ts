import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaoEncontradaRoutingModule } from './nao-encontrada-routing.module';
import { NaoEncontradaComponent } from './nao-encontrada.component';


@NgModule({
  declarations: [
    NaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    NaoEncontradaRoutingModule
  ]
})
export class NaoEncontradaModule { }
