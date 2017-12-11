import { Component, OnInit } from '@angular/core';
import {OccasionService} from '../occasion.service';
import {Occasion} from '../occasion';

import { Router } from '@angular/router';

@Component({
  selector: 'app-occasion-list',
  templateUrl: './occasion-list.component.html',
  styleUrls: ['./occasion-list.component.css']
})
export class OccasionListComponent implements OnInit {

  private occasions : Array<Occasion>;

  constructor(
    private occasionService: OccasionService,
    private router: Router
  ) { }

  ngOnInit() {
  	this.getOccasions();
  }

  getOccasions() : void {
  	this.occasionService.getOccasions()
      .subscribe(occasions => this.occasions = occasions);
  }


  addNewOccasion(): void {
    //shitty hack because we're using mock data
    const id = this.occasions.length+1;


    //no proper date formatting in javascript in 2017???
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let formattedDate = day+'.'+month+'.'+year;

    let newOccasion = {
      id: id,
      name: 'Enter a name here...',
      description: 'Enter a description here...',
      participants: [],
      totalSpending: 0.00,
      items: [],
      transactions: [],
      date: formattedDate
    }

    this.router.navigate(['/detail/'+id]);
    this.occasions.push(newOccasion);


  }



}
