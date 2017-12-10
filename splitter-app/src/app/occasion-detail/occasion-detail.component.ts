import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { OccasionService } from '../occasion.service';
// import { Occasion } from '../occasion';


@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: OccasionService
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getOccasion();
  }

  getOccasion(): void {
    // += converts string to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getOccasion(id)
      .subscribe(occasion => this.occasion = occasion);
  }

  // @Input() occasion: Occasion;

}
