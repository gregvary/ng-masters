import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import 'rxjs/add/operator/switchMap';

import { SplitService } from '../split.service';
import { OccasionService } from '../occasion.service';
import { Occasion } from '../occasion';
import { Item } from '../item';
import { Person } from '../person';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {

  private occasion: Occasion;
  private items: Item[];

  newItemName;
  newItemPayer;
  newItemAmount;

  displayedColumns = ['name', 'payer', 'amount', 'delete'];
  dataSource;


  constructor(
    private route: ActivatedRoute,
    private service: OccasionService,
    private location: Location,
    private splitService: SplitService
  ) {}

  update(): void {
    // this.occasion.transactions = [];
    console.log('i bims, das update');
    this.occasion.transactions = this.splitService.split(this.occasion);
    console.log(this.occasion);
    console.log(this.occasion.transactions);
  }

  ngOnInit(): void {
    this.getOccasion();
    this.items = this.occasion.items;
    this.dataSource = new MatTableDataSource<Item>(this.items);
    this.update();
  }

  getOccasion(): void {
    // += converts string to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getOccasion(id)
      .subscribe(occasion => this.occasion = occasion);
  }

  submitItem(): void {
    let newItemParticipant;
    console.log(this.newItemPayer);
    this.occasion.participants.forEach( participant => {
        if(participant.name === this.newItemPayer){
          participant.credit += this.newItemAmount;
          newItemParticipant = participant;
        }
    });

    let newItem = {
      name: this.newItemName,
      amount: this.newItemAmount,
      payer: newItemParticipant
    }
    console.log(newItem);
    this.occasion.items.push(newItem);
    console.log(this.occasion.items);
    this.dataSource = new MatTableDataSource<Item>(this.items);
    this.update();
  }

  deleteItem(item: any): void {
    let index = this.occasion.items.indexOf(item);

    if (index >= 0) {
      this.occasion.items.splice(index, 1);
      this.occasion.participants.forEach( participant => {
          if(participant.name === item.payer.name){
            participant.credit -= item.amount;
          }
      });
      this.dataSource = new MatTableDataSource<Item>(this.items);

    }
    this.update();
  }


  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    let newPerson = {
      name: event.value,
      credit: 0
    }

    if ((value || '').trim()) {
      this.occasion.participants.push(newPerson);
      this.update();
    }

    // Reset the input value
    if (input) {
      input.value = '';
      }

  }

  remove(participant: any): void {
    let index = this.occasion.participants.indexOf(participant);

    if (index >= 0) {
      this.occasion.participants.splice(index, 1);
      this.update();
    }
  }

}
