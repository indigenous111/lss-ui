import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponent } from './global/global.component';
import { HeroModule } from './hero/hero.module';



@NgModule({
  declarations: [GlobalComponent],
  imports: [
    CommonModule
  ],
  exports: [
	GlobalComponent,
	HeroModule	
  ]
})
export class GlobalModule { }
