import { createCards } from './Card.js';
import { Player } from './Player.js';

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

  //distribuer les cartes initiales a chaque joueur
  distributeinitialCards = () => {
    this.players.forEach((player) => {
      //ajouter 6 cartes à la main de chaque joueur depuis le deck (pioche)
      for (let i = 1; i <= 6; i++) {
        player.hand.push(this.deck.shift());
      }
    });
    return 'Les cartes ont été distribuées !';
  };

  //piocher une carte
  drawOneCard = (player) => {
    if (player.hand > 6) {
      return 'Peut pas piocher une nouvelle carte';
    } else {
      const drawedCard = this.deck.shift();
      player.hand.push(drawedCard);
      return drawedCard;
    }
  };
}
//const game = new Game();
//console.log('this.game.deck', game.deck.length);
//game.drawOneCard(game.players[0]);
//console.log('this.game.deck', game.deck.length);
//console.log('this.game.deck', game.players[0].hand);
//game.distributeinitialCards();
//console.log('players', game.players[0]);
