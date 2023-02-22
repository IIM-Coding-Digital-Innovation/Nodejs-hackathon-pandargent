import { createCards, DistanceCard, distanceCards } from './Card';

class Game {
  constructor(room = 'room', players) {
    this.room = 'room';
    this.players = [
      new Player(
        'Harry',
        'https://images.rtl.fr/~c/2000v2000/rtl/www/1200629-le-jeune-daniel-radcliffe-dans-harry-potter-a-l-ecole-des-sorciers.jpg',
        '#FF0000'
      ),
      new Player(
        'Hermione',
        'https://www.g33kmania.com/wp-content/uploads/HarryPotter-1-Hermione-Granger.jpg',
        '#0000FF'
      ),
      new Player(
        'Ron',
        'https://www.g33kmania.com/wp-content/uploads/HarryPotter-1-Ron-Weasley.jpg',
        '#00FF00'
      ),
      new Player(
        'Hagrid',
        'https://static.wikia.nocookie.net/harrypotter/images/1/1a/PromoHP3_Rubeus_Hagrid.jpg/revision/latest?cb=20090103221029&path-prefix=fr',
        '#888888'
      ),
    ];
    this.deck = createCards();
    this.defausse = [];
  }
}
