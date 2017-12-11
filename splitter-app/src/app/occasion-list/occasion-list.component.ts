import { Component, OnInit } from '@angular/core';
import { OCCASIONS } from '../mock-data';
import { OccasionComponent } from '../occasion/occasion.component'


@Component({
  selector: 'app-occasion-list',
  templateUrl: './occasion-list.component.html',
  styleUrls: ['./occasion-list.component.css']
})
export class OccasionListComponent implements OnInit {

  occasions = OCCASIONS;

  constructor() { }

  ngOnInit() {
  }

}
