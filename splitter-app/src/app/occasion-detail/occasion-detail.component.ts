import { Component, Input, OnInit } from '@angular/core';

import { Occasion } from '../occasion';


@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() occasion: Occasion;

}
