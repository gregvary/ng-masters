import { Component, Input, OnInit } from '@angular/core';
import {OccasionService} from '../occasion.service';
import { Occasion } from '../occasion';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.css']
})
export class OccasionComponent implements OnInit {

  private occasions : Array<Occasion>;

  @Input() occasion: Occasion;

  constructor(private occasionService: OccasionService) { }

  ngOnInit() {
  }

  deleteOccasion(occasion: any): void {
    this.occasionService.getOccasions().subscribe(occasions => this.occasions = occasions);
    console.log(this.occasions);

    let index = this.occasions.indexOf(occasion);
    if (index >= 0) {
      this.occasions.splice(index, 1);
    }
  }

}
