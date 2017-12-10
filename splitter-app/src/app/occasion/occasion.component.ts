import { Component, Input, OnInit } from '@angular/core';

import { Occasion } from '../occasion';
import { OccasionService } from '../occasion.service';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.css']
})
export class OccasionComponent implements OnInit {

  occasions: Occasion[];

  constructor(private occasionService: OccasionService) {
  }

  getOccasions(): void {
    this.occasionService.getOccasions()
      .subscribe(occasions => this.occasions = occasions);
  }

  deleteOccasion(occasion: any): void {
    let index = this.occasions.indexOf(occasion);

    if (index >= 0) {
      this.occasions.splice(index, 1);
    }
  }

  ngOnInit() {
    this.getOccasions();
  }

  @Input() occasion: Occasion;

}
