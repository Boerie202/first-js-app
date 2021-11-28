
//My array of pokemons, showing different data
var pokemonList = [
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
}
]
pokemonList.forEach(function(pokemon){
document.write(pokemon.name + "<br>");
});
