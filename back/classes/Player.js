import { CardType } from './cardsAssets';

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
    this.state = null;
    this.specialCards = [];
  }
  //joueur une carte
  playCard = (card, player) => {
    switch (card.type) {
      case CardType.SPEC:
        //appler methode de specialCard
        break;
      case CardType.BON:
        //appler methode de specialCard
        break;
      case CardType.MAL:
        //appler methode de specialCard
        break;
      case CardType.DIST:
        card.toProgress(player);
        break;
    }
  };
}
