import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  title = "Indigenous Software Limited, 2020";
  version = "0.0.1";
  project = "lss";
  constructor() { }

  ngOnInit() {
  }

}
