import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Javascript',
    avaliacao: 4.356,
    numeroPaginas: 300,
    preco: 34.76,
    dataLancamento: new Date(2015, 5, 23)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
