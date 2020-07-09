import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("Constructor!");
   }

  ngOnChanges() {
    console.log("ngOnChanges!");
  }

  ngOnInit(): void {
    console.log("ngOnInit!");
  }

  ngDoCheck() {
    console.log("ngDoCheck!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit!");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy!");
  }
}
