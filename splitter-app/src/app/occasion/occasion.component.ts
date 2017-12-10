import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occasion',
  templateUrl: './occasion.component.html',
  styleUrls: ['./occasion.component.css']
})
export class OccasionComponent implements OnInit {

  private name: string;
  private description: string;
  private participants: Array<string>;
  private totalSpending: number;
  private date: string;

  constructor() { }

  ngOnInit() {
  	this.name = 'MockOccasion';
  	this.description = 'Dies ist nur ein Test';
  	this.participants = ['Ich', 'Du', 'Er', 'Sie', 'Es'];
  	this.totalSpending = 42.5;
  	this.date = '13.12.17';
  }

}
