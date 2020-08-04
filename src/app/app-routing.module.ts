import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SerialsTableComponent } from './serials-table/serials-table.component';

const routes: Routes = [
  { path: 'serials', component: SerialsTableComponent },
  { path: '', redirectTo: '/serials', pathMatch: 'full' },
  { path: '**', redirectTo: '/serials' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
