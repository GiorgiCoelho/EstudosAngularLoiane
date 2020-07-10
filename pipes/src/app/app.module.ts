import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { LocaleService } from './locale.service';

/* import {registerLocaleData} from '@angular/common';
import br from '@angular/common/locales/br';
 
registerLocaleData(br, 'pt-BR'); */

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
/*     {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }, */
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeServiceSettings) => localeServiceSettings.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
