import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor() {
        console.log('CursosService instance');
    }

    getArray() {
        return this.cursos;
    }

    addCurso(curso: string){
        //this.logService.consoleLog(`Criando um novo curso ${curso}`);
        console.log('criando novo curso');
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}