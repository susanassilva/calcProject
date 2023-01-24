import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  {
    path: 'calculadora',
    component:CalculadoraComponent,
    data: {title:'Calculadora'}
  },
  {
    path: '',
    redirectTo:'/calculadora',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
