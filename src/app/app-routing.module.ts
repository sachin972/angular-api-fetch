import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [
  {path:'table', component: TableComponent},
  {path:'chart', component: PieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
