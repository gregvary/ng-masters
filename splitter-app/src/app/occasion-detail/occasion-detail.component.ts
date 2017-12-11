import { Component, OnInit } from '@angular/core';
import { Occasion } from '../occasion';
import { ActivatedRoute } from '@angular/router';
import { OccasionService } from '../occasion.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

@Component({
  selector: 'app-occasion-detail',
  templateUrl: './occasion-detail.component.html',
  styleUrls: ['./occasion-detail.component.css']
})
export class OccasionDetailComponent implements OnInit {

private occasion: Occasion;

  constructor(
  	private route: ActivatedRoute,
    private service: OccasionService
    ) { }

  ngOnInit() {
  	this.getOccasion();
  }

  getOccasion(): void {
    // =+ converts string to number
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getOccasion(id)
      .subscribe(occasion => this.occasion = occasion);
  }

  // Enter, comma
  private separatorKeysCodes = [ENTER, COMMA];

  addParticipant(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    let newPerson = event.value;

    if ((value || '').trim()) {
      this.occasion.participants.push(newPerson);
    }

    // Reset the input value
    if (input) {
      input.value = '';
      }

  }

  removeParticipant(participant: string): void {
    let index = this.occasion.participants.indexOf(participant);

    if (index >= 0) {
      this.occasion.participants.splice(index, 1);
    }
  }

}
