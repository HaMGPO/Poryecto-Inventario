import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GraficoTendenciaComponent } from './components/grafico-tendencia/grafico-tendencia.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ApiAccessService } from './services/api-access.service';

@NgModule({
  declarations: [
    AppComponent,
    GraficoTendenciaComponent,
    PreciosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimations(),
    ApiAccessService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
