import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada.component';

const routes: Routes = [{ path: '', component: NaoEncontradaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaoEncontradaRoutingModule { }
