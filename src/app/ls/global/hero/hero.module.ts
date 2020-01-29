import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeModule } from './type/type.module';
import { HeroComponent } from './hero/hero.component';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './type/manage/manage.component';
import { ModuleWithProviders } from "@angular/core";

const routes: Routes = [
                        {path: "hero/manage", component: ManageComponent, outlet: "content"}
                      ];

const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });

@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    routingModule
  ],
  exports: [TypeModule,
            RouterModule]
})
export class HeroModule { }
