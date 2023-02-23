import { CardType } from './cardsAssets.js';
const cardTest = {
  id: 0,
  name: 'Bombe bleue',
  description: '',
  type: CardType.DIST,
  number: 10,
  img: '',
  distance: 25,
};
export class Player {
  constructor(
    pseudo = 'Harry',
    img = 'https://images.rtl.fr/~c/2000v2000/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg',
    color = '#FF0000'
  ) {
    this.pseudo = pseudo;
    this.progress = 0;
    this.img = img;
    this.color = color;
    this.hand = [];
    this.state = {
      id: 9,
      name: 'Vulnera Sanentur',
      description: '',
      type: CardType.BON,
      number: 6,
      img: 'https://firebasestorage.googleapis.com/v0/b/hp-borne.appspot.com/o/Expelliarmus-7.png?alt=media&token=4b78aec1-06e9-4c7e-b97f-689a310abac2',
    };
    this.specialCards = [{
      id: 5,
      name: 'Voiture volante',
      description: '',
      type: CardType.SPEC,
      number: 1,
      img:'https://firebasestorage.googleapis.com/v0/b/hp-borne.appspot.com/o/Voiture%20volante.png?alt=media&token=cef0925c-afa8-4dfe-906b-0417503fd9b6'
    }];
    this.distanceCard={
      id: 1,
      name: "Flèche d'argent",
      description: '',
      type: CardType.DIST,
      distance: 50,
      number: 10,
      img: 'https://firebasestorage.googleapis.com/v0/b/hp-borne.appspot.com/o/fleche.png?alt=media&token=d31dc6d0-1853-4311-ba2d-750f7aae6aea',
    }
    this.me = false;
  }
  //jouer une carte
  playCard = (card, player) => {
    console.log('card.name', card.distance);
    //attriuer le bon effet de la carte
    switch (card.type) {
      case CardType.SPEC:
        card.toSetSpecial(player);
        break;
      case CardType.BON:
        card.toSetBonus(player);
        break;
      case CardType.MAL:
        card.toSetMalus(player);
        break;
      case CardType.DIST:
        card.toProgress(player);
        break;
    }
    this.removeCardFromHand(card.id);
  };

  removeCardFromHand = (cardId) => {
    //retire la carte de la main
    this.hand = this.hand.filter((handCard) => (handCard.id = cardId));
  };

  toDefausse = (game, card) => {
    //recupere la carte dans la main
    const cardDefaussed = this.hand.find((handCard) => handCard.id == card.id);
    this.removeCardFromHand(card.id);
    //ajoute la carte a la defausse
    game.defausse.push(cardDefaussed);
  };
}

// let playerA = new Player();
// let cardTruc = new BonusCard(0, 'Bombe bleue', '', CardType.BON, 10, '');
// playerA.playCard(cardTruc, playerA);
// console.log('playerA', playerA);
