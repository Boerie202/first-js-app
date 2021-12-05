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



function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let pokemonItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add ("button-class");
  pokemonItem.appendChild(button);
  pokemonList.appendChild(pokemonItem);
//Events start
button.addEventListener('click', function(){
showDetails(pokemon);
})
//Events finish
}//<-------------addListItem function finish



function showDetails(pokemon){
  console.log(pokemon.name);
}

 return {
 add: add,
 getAll: getAll,
 addListItem: addListItem,
 showDetails: showDetails
 };

})();

//display all pokemon info on the document
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
