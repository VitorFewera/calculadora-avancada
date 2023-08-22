import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardBaskaraComponent } from './cards/card-baskara/card-baskara.component';
import { CardAreasComponent } from './cards/card-areas/card-areas.component';
import { CardTrigonometricaComponent } from './cards/card-trigonometrica/card-trigonometrica.component';
import { CardJurosComponent } from './cards/card-juros/card-juros.component';
import { TipoFormulaComponent } from './tipo-formula/tipo-formula.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CalcBhaskaraComponent } from './equacacoes/calc-bhaskara/calc-bhaskara.component';
import { CalcAreaComponent } from './equacacoes/calc-area/calc-area.component';
import { TrianguloComponent } from './equacacoes/calc-area/triangulo/triangulo.component';
import { EscolhasComponent } from './equacacoes/calc-area/escolhas/escolhas.component';
import { QuadradoComponent } from './equacacoes/calc-area/quadrado/quadrado.component';
import { TrapezioComponent } from './equacacoes/calc-area/trapezio/trapezio.component';
import { RetanguloComponent } from './equacacoes/calc-area/retangulo/retangulo.component';
import { LosangoComponent } from './equacacoes/calc-area/losango/losango.component';
import { CirculoComponent } from './equacacoes/calc-area/circulo/circulo.component';
import { CalcJurosComponent } from './equacacoes/calc-juros/calc-juros.component';
import { EscolhasJurosComponent } from './equacacoes/calc-juros/escolhas-juros/escolhas-juros.component';
import { JurosSimplesComponent } from './equacacoes/calc-juros/juros-simples/juros-simples.component';
import { JurosCompostoComponent } from './equacacoes/calc-juros/juros-composto/juros-composto.component';
import {FormsModule} from "@angular/forms";
import {CalculadoraService} from "./shared/service/calculadora.service";
import { CalcTrigonometriaComponent } from './equacacoes/calc-trigonometria/calc-trigonometria.component';
import { EscolhasTrigonometriaComponent } from './equacacoes/calc-trigonometria/escolhas-trigonometria/escolhas-trigonometria.component';
import { SenoComponent } from './equacacoes/calc-trigonometria/seno/seno.component';
import { CossenoComponent } from './equacacoes/calc-trigonometria/cosseno/cosseno.component';
import { TangenteComponent } from './equacacoes/calc-trigonometria/tangente/tangente.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardBaskaraComponent,
    CardAreasComponent,
    CardTrigonometricaComponent,
    CardJurosComponent,
    TipoFormulaComponent,
    CarouselComponent,
    CalcBhaskaraComponent,
    CalcAreaComponent,
    TrianguloComponent,
    EscolhasComponent,
    QuadradoComponent,
    TrapezioComponent,
    RetanguloComponent,
    LosangoComponent,
    CirculoComponent,
    CalcJurosComponent,
    EscolhasJurosComponent,
    JurosSimplesComponent,
    JurosCompostoComponent,
    CalcTrigonometriaComponent,
    EscolhasTrigonometriaComponent,
    SenoComponent,
    CossenoComponent,
    TangenteComponent,
    ContatoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
