import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TipoFormulaComponent} from "./tipo-formula/tipo-formula.component";
import {CalcBhaskaraComponent} from "./equacacoes/calc-bhaskara/calc-bhaskara.component";
import {CalcAreaComponent} from "./equacacoes/calc-area/calc-area.component";
import {TrianguloComponent} from "./equacacoes/calc-area/triangulo/triangulo.component";
import {QuadradoComponent} from "./equacacoes/calc-area/quadrado/quadrado.component";
import {TrapezioComponent} from "./equacacoes/calc-area/trapezio/trapezio.component";
import {RetanguloComponent} from "./equacacoes/calc-area/retangulo/retangulo.component";
import {LosangoComponent} from "./equacacoes/calc-area/losango/losango.component";
import {CirculoComponent} from "./equacacoes/calc-area/circulo/circulo.component";
import {CalcJurosComponent} from "./equacacoes/calc-juros/calc-juros.component";
import {JurosSimplesComponent} from "./equacacoes/calc-juros/juros-simples/juros-simples.component";
import {JurosCompostoComponent} from "./equacacoes/calc-juros/juros-composto/juros-composto.component";
import {CalcTrigonometriaComponent} from "./equacacoes/calc-trigonometria/calc-trigonometria.component";
import {CossenoComponent} from "./equacacoes/calc-trigonometria/cosseno/cosseno.component";
import {TangenteComponent} from "./equacacoes/calc-trigonometria/tangente/tangente.component";
import {SenoComponent} from "./equacacoes/calc-trigonometria/seno/seno.component";
import {ContatoComponent} from "./contato/contato.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tipo-formula',
    component: TipoFormulaComponent,
  },
  {
    path: 'calc-baskara',
    component: CalcBhaskaraComponent,
  },
  {
    path: 'calc-areat',
    component: CalcAreaComponent,
  },
  {
    path: 'triangulo',
    component: TrianguloComponent,
  },
  {
    path: 'quadrado',
    component: QuadradoComponent,
  },
  {
    path: 'trapezio',
    component: TrapezioComponent,
  },
  {
    path: 'retangulo',
    component: RetanguloComponent,
  },
  {
    path: 'losango',
    component: LosangoComponent,
  },
  {
    path: 'circulo',
    component: CirculoComponent,
  },
  {
    path: 'juros',
    component: CalcJurosComponent,
  },
  {
    path: 'juros-simples',
    component: JurosSimplesComponent,
  },
  {
    path: 'calc-trigo',
    component: CalcTrigonometriaComponent,
  },
  {
    path: 'seno',
    component: SenoComponent,
  },
  {
    path: 'cosseno',
    component: CossenoComponent,
  },
  {
    path: 'tangente',
    component: TangenteComponent,
  },
  {
    path: 'juros-composto',
    component: JurosCompostoComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
