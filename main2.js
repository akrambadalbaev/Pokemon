// FUNCTION TO RETRIEVE POKEMON STATS

pokemonList = [];

//

function getSuicune() {

let apiLink = "https://fizal.me/pokeapi/api/v2/id/245.json";

 var newcall = new XMLHttpRequest();
 newcall.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     var pokeinfo = JSON.parse(this.responseText);

     let Suicune = {
      hp: pokeinfo.stats[5].base_stat,
      attack: pokeinfo.stats[4].base_stat,
      defense: pokeinfo.stats[3].base_stat,
      ability: pokeinfo.abilities[0].ability.name,
      id: pokeinfo.id


     }
     pokemonList.push(Suicune);

     pokeStats(Suicune)
   }
 }
 newcall.open("GET", apiLink, true);
 newcall.send();

}

function pokeStats(Suicune) {
  let hp = document.getElementById("hp");
  hp.innerHTML = Suicune.hp;
  let attack = document.getElementById("attack");
  attack.innerHTML = Suicune.attack;
  let defense = document.getElementById("defense");
  defense.innerHTML = Suicune.defense;
  let ability = document.getElementById("abilities");
  ability.innerHTML = Suicune.ability;

}

// Zapdos

function getZapdos() {

let apiLink = "https://fizal.me/pokeapi/api/v2/id/145.json";

 var newcall = new XMLHttpRequest();
 newcall.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     var pokeinfo = JSON.parse(this.responseText);

     let Zapdos = {
      hp: pokeinfo.stats[5].base_stat,
      attack: pokeinfo.stats[4].base_stat,
      defense: pokeinfo.stats[3].base_stat,
      ability: pokeinfo.abilities[0].ability.name,
      id: pokeinfo.id


     }
     pokemonList.push(Zapdos);

     pokeStats(Zapdos)
   }
 }
 newcall.open("GET", apiLink, true);
 newcall.send();

}

function pokeStats(Zapdos) {
  let hp = document.getElementById("hp");
  hp.innerHTML = Zapdos.hp;
  let attack = document.getElementById("attack");
  attack.innerHTML = Zapdos.attack;
  let defense = document.getElementById("defense");
  defense.innerHTML = Zapdos.defense;
  let ability = document.getElementById("abilities");
  ability.innerHTML = Zapdos.ability;

}

// Moltres

function getMoltres() {

let apiLink = "https://fizal.me/pokeapi/api/v2/id/146.json";

 var newcall = new XMLHttpRequest();
 newcall.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     var pokeinfo = JSON.parse(this.responseText);

     let Moltres = {
      name: pokeinfo.name,
      hp: pokeinfo.stats[5].base_stat,
      attack: pokeinfo.stats[4].base_stat,
      defense: pokeinfo.stats[3].base_stat,
      ability: pokeinfo.abilities[0].ability.name,
      id: pokeinfo.id


     }
     pokemonList.push(Moltres);

     pokeStats(Moltres)
   }
 }
 newcall.open("GET", apiLink, true);
 newcall.send();

}

function pokeStats(Moltres) {
  let name = document.getElementById("pokemon-name");
  name.innerHTML = Moltres.name
  let hp = document.getElementById("hp");
  hp.innerHTML = Moltres.hp;
  let attack = document.getElementById("attack");
  attack.innerHTML = Moltres.attack;
  let defense = document.getElementById("defense");
  defense.innerHTML = Moltres.defense;
  let ability = document.getElementById("abilities");
  ability.innerHTML = Moltres.ability;

}
