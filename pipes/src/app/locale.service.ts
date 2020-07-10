import { Injectable } from '@angular/core';

import {registerLocaleData} from '@angular/common';
import br from '@angular/common/locales/br';
 
registerLocaleData(br, 'pt-BR'); 

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor() { }

  getLocale() {
    return 'pt-BR';
  }
}
