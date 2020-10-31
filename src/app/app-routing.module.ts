import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtividadeComponent } from './atividade/atividade.component';
import { CapaComponent } from './capa/capa.component';

const routes: Routes = [
  {path: '', component: CapaComponent},
  {path: 'atividade', component: AtividadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
