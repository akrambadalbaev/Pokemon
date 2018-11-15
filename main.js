let pokemonList = [];
//
// // Trainer name
// class Trainer {
//   constructor(name) {
//     this.name = name;
//
//   }
//
// let Trainer = new Trainer('Imperator');

// function to get Pokemon

function getPokemon(idNumber) {

// link to pokemon API
let apiLink = "https://fizal.me/pokeapi/api/v2/id/" + idNumber +".json";
// link to images
// let apiLinkImg = "http://assets.pokemon.com/assets/cms2/img/pokedex/full/" + idNumber + ".png";
// console.log(apiLinkImg);

var newcall = new XMLHttpRequest();
newcall.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
   var pokeinfo = JSON.parse(this.responseText);

    let Pokemon = {
    name: pokeinfo.name,
    hp: pokeinfo.stats[5].base_stat,
    attack: pokeinfo.stats[4].base_stat,
    defense: pokeinfo.stats[3].base_stat,
    ability: pokeinfo.abilities[0].ability.name,

    id: pokeinfo.id,
  }
     pokemonList.push(Pokemon);

     pokeStats(Pokemon)
   }
 }
 newcall.open("GET", apiLink, true);
 newcall.send();

}

function pokeStats(Pokemon) {
  // set inner html to current pokemon stats
  let hp = document.getElementById("hp");
  hp.innerHTML = Pokemon.hp;
  let attack = document.getElementById("attack");
  attack.innerHTML = Pokemon.attack;
  let defense = document.getElementById("defense");
  defense.innerHTML = Pokemon.defense;
  let ability = document.getElementById("abilities");
  ability.innerHTML = Pokemon.ability;
}
