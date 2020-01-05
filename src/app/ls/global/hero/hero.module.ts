import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeModule } from './type/type.module';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule
  ],
  exports: [TypeModule]
})
export class HeroModule { }
