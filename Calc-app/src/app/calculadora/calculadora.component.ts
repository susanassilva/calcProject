import { Component, OnInit } from '@angular/core';
import {Calc} from '../models/Calc';
import { ApiService } from '../services/api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  public Operator!: string;
  public Calc: Calc = new Calc();
  public Result!: number;

  calculator: Calc = new Calc;
  calcForm!: FormGroup;
  
  constructor(private _apiService: ApiService){}


  




}
