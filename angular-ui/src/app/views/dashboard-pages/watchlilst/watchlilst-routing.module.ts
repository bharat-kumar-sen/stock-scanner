import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchlilstComponent } from './watchlilst.component';


const routes: Routes = [
  { path: "", component: WatchlilstComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchlilstRoutingModule { }
