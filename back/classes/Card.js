import {
  bonusCards,
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
  constructor(name, description, type, number, img, distance) {
    super(name, description, type, number, img);
    this.distance = distance;
  }
  toProgress(player) {
    player.progress += this.distance;
  }
}

export class SpecialCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}
export class BonusCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}

export class MalusCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}
export class CharacterCard extends Card {
  constructor(name, description, type, number, img) {
    super(name, description, type, number, img);
  }
}

// create all cards
export const createCards = () => {
  let cardList = [];

  //create distance cards
  distanceCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new DistanceCard(
        card.id,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img,
        card.distance
      );
      cardList.push(newCard);
    }
  });
  //create special cards
  specialCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new SpecialCard(
        card.id,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      cardList.push(newCard);
    }
  });
  //create bonus cards
  bonusCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new BonusCard(
        card.id,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      cardList.push(newCard);
    }
  });
  //create malus cards
  malusCards.forEach((card) => {
    for (let i = 1; i <= card.number; i++) {
      let newCard = new MalusCard(
        card.id,
        card.name,
        card.description,
        card.number,
        card.type,
        card.img
      );
      cardList.push(newCard);
    }
  });
  //create character cards
  // characterCards.forEach((card) => {
  //   for (let i = 1; i <= card.number; i++) {
  //     let newCard = new CharacterCard(
  //       card.id,
  //       card.name,
  //       card.description,
  //       card.number,
  //       card.type,
  //       card.img
  //     );
  //     cardList.push(newCard);
  //   }
  // });
  cardList = shuffleArray(cardList);
  console.log('cardList', cardList.length);

  return cardList;
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

createCards();
