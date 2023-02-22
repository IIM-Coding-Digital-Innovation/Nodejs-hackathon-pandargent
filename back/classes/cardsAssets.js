export const CardType = {
  PERS: 'Personnage',
  SPEC: 'Spéciale',
  DIST: 'Distance',
  MAL: 'Malus',
  BON: 'Bonus',
};

export const distanceCards = [
  {
    name: 'Bombe bleue',
    description: '',
    type: CardType.DIST,
    distance: 25,
    number: 10,
    img: '',
  },
  {
    name: "Flèche d'argent",
    description: '',
    type: CardType.DIST,
    distance: 50,
    number: 10,
    img: '',
  },
  {
    name: 'Nimbus 2000',
    description: '',
    type: CardType.DIST,
    distance: 75,
    number: 10,
    img: '',
  },
  {
    name: 'Eclair de feu',
    description: '',
    type: CardType.DIST,
    distance: 100,
    number: 12,
    img: '',
  },
  {
    name: 'Foudre VII',
    description: '',
    type: CardType.DIST,
    distance: 200,
    number: 4,
    img: '',
  },
];
export const specialCards = [
  {
    name: 'Voiture volante',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Bague de Sureau',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: "Cape d'invisibilité",
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Phénix',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
];
export const bonusCards = [
  {
    name: 'Vulnera Sanentur',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Protego',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Balais',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Finite Incantatem',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Mobilicorpus',
    description: '',
    type: CardType.BON,
    number: 1,
  },
];
export const malusCards = [
  {
    name: 'Cognard',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Expeliarmus',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Diffinito',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Imobilis',
    description: '',
    type: CardType.MAL,
    number: 5,
  },
  {
    name: 'Impedimenta',
    description: '',
    type: CardType.MAL,
    number: 4,
  },
];
export const characterCards = [
  {
    name: 'Peter Pettigrew',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Hermione',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dobby',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Alastor Maugrey',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Harry Potter',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dumbledore',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Drago',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Voldemort',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
];

export const allCards = [
  //distance
  {
    name: 'Bombe bleue',
    description: '',
    type: CardType.DIST,
    distance: 25,
    number: 10,
    img: '',
  },
  {
    name: "Flèche d'argent",
    description: '',
    type: CardType.DIST,
    distance: 50,
    number: 10,
    img: '',
  },
  {
    name: 'Nimbus 2000',
    description: '',
    type: CardType.DIST,
    distance: 75,
    number: 10,
    img: '',
  },
  {
    name: 'Eclair de feu',
    description: '',
    type: CardType.DIST,
    distance: 100,
    number: 12,
    img: '',
  },
  {
    name: 'Foudre VII',
    description: '',
    type: CardType.DIST,
    distance: 200,
    number: 4,
    img: '',
  },
  //speciale
  {
    name: 'Voiture volante',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Bague de Sureau',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: "Cape d'invisibilité",
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  {
    name: 'Phénix',
    description: '',
    type: CardType.SPEC,
    number: 1,
  },
  //Bonus
  {
    name: 'Vulnera Sanentur',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Protego',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Balais',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Finite Incantatem',
    description: '',
    type: CardType.BON,
    number: 6,
  },
  {
    name: 'Mobilicorpus',
    description: '',
    type: CardType.BON,
    number: 1,
  },
  //Malus
  {
    name: 'Cognard',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Expeliarmus',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Diffinito',
    description: '',
    type: CardType.MAL,
    number: 3,
  },
  {
    name: 'Imobilis',
    description: '',
    type: CardType.MAL,
    number: 5,
  },
  {
    name: 'Impedimenta',
    description: '',
    type: CardType.MAL,
    number: 4,
  },
  //Personnage
  {
    name: 'Peter Pettigrew',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Hermione',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dobby',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Alastor Maugrey',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Harry Potter',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Dumbledore',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Drago',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
  {
    name: 'Voldemort',
    description: '',
    type: CardType.PERS,
    number: 1,
  },
];
