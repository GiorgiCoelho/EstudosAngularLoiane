import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('valorInput') valorCampoInput: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  somar() {
    //this.value++;
    //this.mudouValor.emit(this.value);
    this.valorCampoInput.nativeElement.value++;
    this.mudouValor.emit(this.valorCampoInput.nativeElement.value)
  }

  diminuir() {
    /* this.value--;
    this.mudouValor.emit(this.value); */
    this.valorCampoInput.nativeElement.value--;
    this.mudouValor.emit(this.valorCampoInput.nativeElement.value)
  }

}
