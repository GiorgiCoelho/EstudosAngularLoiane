import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome: string = "Giorgi";
  pessoa: any = {
    nome: 'giorgi',
    idade: 24
  };

}
