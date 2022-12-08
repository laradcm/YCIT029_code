
// const pokedex = {};

const pokedex = new Map();

class stats {
  constructor(hp, atk, def) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }
}

pokedex.set("pikachu",  new stats(3,3,3));
pokedex.set("bulbasaur", new stats(3,2,4));
pokedex.set("charmander", new stats(3,5,2));


module.exports = pokedex;



// function stats(hp, atk, def){
//     return{
//         hp: hp,
//         attack: atk,
//         defense: def
//     }
// }


