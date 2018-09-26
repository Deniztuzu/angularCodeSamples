import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbProgressbarConfig]
})
export class MainComponent implements OnInit {

  constructor(config: NgbProgressbarConfig) {
  // customize default values of progress bars used by this component tree
  config.max = 1000;
  config.striped = true;
  config.animated = true;
  config.type = 'success';
  config.height = '20px';


   }

  ngOnInit() {
  }

}
