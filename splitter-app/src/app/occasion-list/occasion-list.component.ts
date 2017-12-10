import { Component, OnInit } from '@angular/core';
import {OccasionService} from '../occasion.service';
import {Occasion} from '../occasion';

@Component({
  selector: 'app-occasion-list',
  templateUrl: './occasion-list.component.html',
  styleUrls: ['./occasion-list.component.css']
})
export class OccasionListComponent implements OnInit {

  private occasions : Array<Occasion>;

  constructor(private occasionService: OccasionService) { }

  ngOnInit() {
  	this.getOccasions();
  }

  getOccasions() : void {
  	this.occasionService.getOccasions()
      .subscribe(occasions => this.occasions = occasions);
  }

}
