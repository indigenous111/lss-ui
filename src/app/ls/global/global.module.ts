import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { HeroModule } from './hero/hero.module';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero/hero.component';

const routes: Routes = [
                        {path: "glb/hero", component: HeroComponent, outlet: "sub-menu"}
                      ];
const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });

@NgModule({
  declarations: [GlobalComponent],
  imports: [
    CommonModule,
    routingModule
  ],
  exports: [
	GlobalComponent,
	HeroModule
  ]
})
export class GlobalModule { }
