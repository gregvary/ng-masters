import { Component, OnInit, Input } from '@angular/core';
import { Occasion } from '../occasion';
import { OccasionService } from '../occasion.service';

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
