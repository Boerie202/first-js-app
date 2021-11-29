//My array of pokemons, showing different data
let pokemonRepository = (function(){
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
]

//returns the pokemonList array
function getAll (){
return pokemonList;
}

//adds new data to the pokemonList array
function add() {
    pokemonList.push(pokemon);
}
)();

pokemonList.forEach(function(pokemon){
document.write(pokemon.name + "<br>");
});
