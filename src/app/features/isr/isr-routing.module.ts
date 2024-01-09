import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'uuidv4',
    loadComponent: () => import("./pages/uuidv4/uuidv4.component").then(c => c.Uuidv4Component),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ISRRoutingModule { }
