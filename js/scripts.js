//Start of IIFE
let pokemonRepository = (function() {
//My array of pokemons, showing different data
let pokemonList = [
{
  name:"Blastoise",
  height: 5.03,
  type:"Torrent"
},
{
  name:"Venusaur",
  height:6.07,
  type:"Overgrow"
},
{
  name:"Charizard",
  height:5.07,
  type:"Blaze"
},
];

//returns the pokemonList array
function getAll() {
return pokemonList;
}

//adds new data to the pokemonList array
function add(pokemon) {
    pokemonList.push(pokemon);
    }

 return {
 add: add,
 getAll: getAll
 };

})();

//display all pokemon info on the document
pokemonRepository.getAll().forEach(function(pokemon){
document.write(pokemon.name + "<br>");
});
