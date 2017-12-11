import { Component, Input, OnInit } from '@angular/core';

import { Occasion } from '../occasion';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.css']
})
export class OccasionComponent implements OnInit {

  @Input() occasion: Occasion;

  constructor() { }

  ngOnInit() {
  }

}
