import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './ls/global/hero/hero/hero.component';

const routes: Routes = [
  {path: "glb/hero", component: HeroComponent, outlet: "sub-menu"}
];

const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });

@NgModule({
  imports: [routingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
