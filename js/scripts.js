//-----------------------------------Start of IIFE for Pokemon Details------------------
let pokemonRepository = (function() {
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let pokemonList = [];
let modal = document.querySelector('#pokedex');
let imageContainer = document.querySelector('#image-container');


function getAll() { //returns the pokemonList array
return pokemonList;
}

function add(pokemon) { //adds new data to the pokemonList array
    pokemonList.push(pokemon);
    }

//---------------------------------------------------------------------------------

function loadList() { //Loads full list of 150 pokemon and displays them on the page
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


//---------------------------------------------------------------------------------

  function loadDetails(item) { //Load pokemon details on page
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) { // Add details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
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


button.addEventListener('click', function(){// Listen for click and show details of pokemon
showDetails(pokemon);
})
}


function showDetails(pokemon){
  pokemonRepository.loadDetails(pokemon).then(function(){
    showModal (pokemon);
  });
}


//------------------------------Bootstrap Modal Section start-----------------------

function showModal(pokemon) {


  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  modalTitle.empty();
  modalBody.empty();

  let nameElement = $('<h5 class="text-capitalise">' + pokemon.name + '</h5>');
  let heightElement = $('<p>' + "Height: " + pokemon.height + "0 cm" + '</p>');
  let weightElement = $('<p>' + "Weight: " + pokemon.weight + " kg" + '<p>');
  let imageElement = $('<img src"">');
  imageElement.attr('src',pokemon.imageUrl);

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(weightElement);
  modalBody.append(heightElement);

$('#pokedex').modal();
}


//------------------------------Bootstrap Modal section end--------------------------



 return {
 add: add,
 getAll: getAll,
 addListItem: addListItem,
 showDetails: showDetails,
 loadList: loadList,
 loadDetails: loadDetails
 };

})();

//----------------------------display all pokemon info on the document---------------------------------

pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});
});

//--------------------------------Email & password form validation IIFE Start---------------------------------

(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');


  function showErrorMessage(input, message){
    let container = input.parentElement;
    let error = container.querySelector('.error-message');
    if (error){
    container.removeChild(error);
  }

    if (message){
      let error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value){
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }
    if (value.indexOf('@') === -1) {
    showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
    return false;
  }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validatePassword() {
    let value = passwordInput.value;

      if (!value) {
        showErrorMessage(passwordInput, 'Password is a required field.');
        return false;
      }

      if (value.length < 8) {
        showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
        return false;
      }

        showErrorMessage(passwordInput, null);
        return true;
    }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Success!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);

})();

//-----------------------------End of email & password form validation IIFE-------------------------------
