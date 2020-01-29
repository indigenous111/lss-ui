import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../../../shared/services/global/hero.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  heroTypes:string [];

  addHeroTypeForm: FormGroup;

  constructor(private glbHeroService:HeroService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.addHeroTypeForm = this.fb.group({
      Type: ['', Validators.required ]
    });
  }

  ngOnInit() {
    providers:[HeroService]
    try {
       this.glbHeroService.getHeroTypes().subscribe( data => {

         for(let heroType of data)
         {
           this.heroTypes.push(heroType.Type);
         }
       });
    } catch(e) {
      console.error('####### ' + e);
    }
  }

}
