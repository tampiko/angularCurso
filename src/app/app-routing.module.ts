import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'listado' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
