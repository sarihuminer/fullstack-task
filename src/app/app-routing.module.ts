import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomTableComponent } from './random-table/random-table.component';


const routes: Routes = [
 { path:"table",component:RandomTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
