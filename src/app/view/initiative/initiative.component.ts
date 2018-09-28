import { Component, OnInit } from '@angular/core';
import { InitiativeEntity } from './../../model/initiative-entity.model';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.css']
})
export class InitiativeComponent implements OnInit {

  // TODO: This should not be hard-coded...
  party: InitiativeEntity[] = [
    {
      name: 'Fighter',
      modifier: 2,
      player: true,
      score: 10,
    },
    {
      name: 'Wizard',
      modifier: 1,
      player: true,
      score: 10,
    },
    {
      name: 'Rogue',
      modifier: 4,
      player: true,
      score: 10,
    },
    {
      name: 'Orc Warriors',
      modifier: 1,
      player: false,
      score: 10,
    },
    {
      name: 'Orc Chief',
      modifier: 3,
      player: false,
      score: 10,
    },
  ];

  private calculateInitiative() {
    // Create a new party to facilitate change detection.
    const party: InitiativeEntity[] = [];
    for (const entity of this.party) {
      // TODO: This works for now in terms of random.
      entity.score = Math.floor((Math.random() * 20) + 1) + entity.modifier;
      party.push(entity);
    }
    this.party = party;
  }

  constructor() { }

  ngOnInit() {
  }

}
