//Start of IIFE
let pokemonRepository = (function() {
//My array of pokemons, showing different data

let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let pokemonList = [];

//returns the pokemonList array
function getAll() {
return pokemonList;
}

//adds new data to the pokemonList array
function add(pokemon) {
    pokemonList.push(pokemon);
    }


// Load full list of 150 pokemon and display them on the page
function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
    })
}


//Load pokemon details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Add details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
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
  loadDetails(pokemon).then(function(){
    console.log (pokemon);
  });
}

 return {
 add: add,
 getAll: getAll,
 addListItem: addListItem,
 showDetails: showDetails,
 loadList: loadList,
 loadDetails: loadDetails
 };

})();

//display all pokemon info on the document
pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
});
