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
  entityHasAdvantage: boolean;

  lowestScore: number;

  showScores = false;

  addEntity() {
    if (!this.containsName(this.entityName)) {
      const newEntity: InitiativeEntity = {
        name: this.entityName,
        modifier: this.entityInitMod,
        player: this.entityIsPlayer,
        score: 10,
        advantage: this.entityHasAdvantage,
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
    this.entityHasAdvantage = false;
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
    this.lowestScore = Number.MAX_SAFE_INTEGER;
    for (const entity of this.party) {
      // TODO: This works for now in terms of random.
      if (!entity.advantage) {
        entity.score = Math.floor((Math.random() * 20) + 1) + entity.modifier;
      } else {
        const roll1 = Math.floor((Math.random() * 20) + 1) + entity.modifier;
        const roll2 = Math.floor((Math.random() * 20) + 1) + entity.modifier;
        entity.score = Math.max(roll1, roll2);
      }
      if (entity.score < this.lowestScore) {
        this.lowestScore = entity.score;
      }
      party.push(entity);
    }
    this.party = party;
  }

  delayTurn(entity: InitiativeEntity) {
    this.deleteEntity(entity);
    entity.score = --this.lowestScore;
    const newParty = this.party.slice();
    newParty.push(entity);
    this.party = newParty;
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
