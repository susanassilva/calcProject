import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  value1: string = '';
  value2: string = '';
  operator: string = '';
  result: number = 0;
  display: string = '';
  dataSource: any[] = [];
  toDisplay:boolean = false;

  constructor(private apiService: ApiService) {}

  clickDigit(input: string): void {
    if (this.operator === '') {
      this.value1 = this.value1 + input;
      this.display = this.value1;
    } else {
      this.value2 = this.value2 + input;
      this.display = this.value2 
    }
  }

  clickOperation(input: string): void {
    this.operator = input;
  }

  clickResult(): void {
    console.log(this.value1);
    console.log(this.value2);
    this.apiService
      .calc(parseFloat(this.value1), parseFloat(this.value2), this.operator)
      .subscribe((r) => {
        this.result = r;
        this.display = this.result.toString();
      });
  }

  clear(): void {
    this.value1 = '';
    this.value2 = '';
    this.result = 0;
    this.display = '';
    this.operator = '';
  }

  showHistoric(): void {
    this.toDisplay = !this.toDisplay;

    this.apiService.getHistoric().subscribe((res) => {
      this.dataSource = res;
    });
  }

  clearHistoric(): void {
    this.apiService.deleteHistoric().subscribe();
    this.showHistoric();
  }

}
