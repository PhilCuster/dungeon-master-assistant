import { Component, OnInit } from '@angular/core';
import { InitiativeEntity } from './../../model/initiative-entity.model';

@Component({
  selector: 'app-initiative',
  templateUrl: './initiative.component.html',
  styleUrls: ['./initiative.component.scss']
})
export class InitiativeComponent implements OnInit {

  party: InitiativeEntity[] = [];

  entityName: string;
  entityInitMod: number;
  entityIsPlayer: boolean;

  showScores = false;

  addEntity() {
    if (!this.containsName(this.entityName)) {
      const newEntity: InitiativeEntity = {
        name: this.entityName,
        modifier: this.entityInitMod,
        player: this.entityIsPlayer,
        score: 10,
      };

      this.party.push(newEntity);
      this.cancelAddEntity();
    }
    // TODO: Notify user for duplicate name!
  }

  cancelAddEntity() {
    this.entityName = '';
    this.entityInitMod = 0;
    this.entityIsPlayer = false;
  }

  deleteEntity(entity: InitiativeEntity) {
    const index = this.party.indexOf(entity);
    if (index !== -1) { this.party.splice(index, 1); }
    const newParty = this.party.slice();
    // More change detection shenanigans.
    this.party = newParty;
  }

  calculateInitiative() {
    // Create a new party to facilitate change detection.
    const party: InitiativeEntity[] = [];
    for (const entity of this.party) {
      // TODO: This works for now in terms of random.
      entity.score = Math.floor((Math.random() * 20) + 1) + entity.modifier;
      party.push(entity);
    }
    this.party = party;
  }

  private containsName(name: string): boolean {
    for (const entity of this.party) {
      if (entity.name === name) { return true; }
    }
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

}
