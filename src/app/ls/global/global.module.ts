import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { HeroModule } from './hero/hero.module';
import { HeroComponent } from './hero/hero/hero.component';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './hero/type/manage/manage.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

const routes: Routes = [
                        {path: "glb/hero", component: HeroComponent,
                           children:
                             [{path: "glb/hero/manage", component: ManageComponent}]
                        },
                        {path: "glb/hero/manage", component: ManageComponent}
                      ];

const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });

@NgModule({
  declarations: [GlobalComponent],
  imports: [
    CommonModule,
    routingModule,
    SlimLoadingBarModule
  ],
  exports: [
	GlobalComponent,
	HeroModule,
	RouterModule
  ]
})
export class GlobalModule { }
