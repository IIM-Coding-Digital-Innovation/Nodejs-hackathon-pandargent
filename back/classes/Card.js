import { shuffleArray } from '../utils/shuffleArray.js';
import {
  bonusCards,
  CardType,
  characterCards,
  distanceCards,
  malusCards,
  specialCards,
} from './cardsAssets.js';

export class Card {
  constructor(id, name, description, type, number, img) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.number = number;
    this.img = img;
  }
}

export class DistanceCard extends Card {
  constructor(id, name, description, type, number, img, distance) {
    super(id, name, description, type, number, img);
    this.distance = distance;
  }

  toProgress(player) {
    //console.log('player2', player);
    //console.log('this.distance', this.distance);
    player.progress += this.distance;
  }
}

export class SpecialCard extends Card {
  constructor(id, name, description, type, number, img) {
    super(id, name, description, type, number, img);
  }
  toSetSpecial(player) {
    player.specialCards.push(this);
  }
}
export class BonusCard extends Card {
  constructor(id, name, description, type, number, img) {
    super(id, name, description, type, number, img);
  }
  toSetBonus(player) {
    player.state = this.name;
  }
}

export class MalusCard extends Card {
  constructor(id, name, description, type, number, img) {
    super(id, name, description, type, number, img);
  }
  toSetMalus(player) {
    player.state = this.name;
  }
}
export class CharacterCard extends Card {
  constructor(id, name, description, type, number, img) {
    super(id, name, description, type, number, img);
  }
}

// create all cards
export const createCards = () => {
  let cardList = [];
  var ids = 0;
  //create distance cards
  distanceCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new DistanceCard(
        ids,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img,
        card.distance
      );
      ids++;
      cardList.push(newCard);
    }
  });
  //create special cards
  specialCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new SpecialCard(
        ids,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      ids++;
      cardList.push(newCard);
    }
  });
  //create bonus cards
  bonusCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new BonusCard(
        ids,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      ids++;
      cardList.push(newCard);
    }
  });
  //create malus cards
  malusCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new MalusCard(
        ids,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      ids++;
      cardList.push(newCard);
    }
  });
  //create character cards
  // characterCards.forEach((card) => {
  //   for (let i = 1; i <= card.number; i++) {
  //     let newCard = new CharacterCard(
  //       ids,
  //       card.name,
  //       card.description,
  //       card.number,
  //       card.type,
  //       card.img
  //     );
  //    ids++;
  //     cardList.push(newCard);
  //   }
  // });
  cardList = shuffleArray(cardList);

  return cardList;
};

createCards();
