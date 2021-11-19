
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
var text ="";
//A for loop to display the names of pokemon on the web page
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 6 ){
    document.write (pokemonList[i].name + "   " + "height:  " + "("+ pokemonList[i].height + ")" + " -That's a massive Pokemon!" + "<br>");
  }
  else {
      document.write (pokemonList[i].name + "   " + "height:  " + "("+ pokemonList[i].height + ")" + "<br>")
  }
}
