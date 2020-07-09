import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string;
  cursoAngular: boolean;
  urlImagem: string;

  nomeCurso = 'Angular';
  valor = 10;

  constructor() {
    this.url = "www.google.com";
    this.cursoAngular = true;
    this.urlImagem = 'https://picsum.photos/200';
   }

  ngOnInit(): void {
  }

  getValor ():number {
    return 1;
  }

  curtirCurso():boolean {
    return true;
  }

  botaoClicado() {
    alert("Fui clicado!");
  }

  valorAtual = ''
  //se usar o TS pra definir o tipo, ele ajuda com o Intelissense
  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  valorSalvo = '';
  salvarValor(event: KeyboardEvent) {
    this.valorSalvo =  (<HTMLInputElement>event.target).value;
  }

  valorSalvoBlur = '';
  salvarValorBlur(valor) {
    this.valorSalvoBlur =  valor;
  }

  isMouseOver = false;
  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event) {
    console.log(event);
  }

}
