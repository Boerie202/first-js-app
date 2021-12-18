//-----------------------------------Start of IIFE for Pokemon Details------------------
let pokemonRepository = (function() {
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let pokemonList = [];
let modalContainer = document.querySelector('#modal-container');
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


//-------------------------------Modal Section Start--------------------------------

  function showModal(pokemon) {
    // Clear all existing modal content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height + ' meters tall';

    let weightElement = document.createElement('p');
    weightElement.innerText = 'Weight: ' + pokemon.weight + ' kg';

    let imageElement = document.createElement('img')
    imageElement.src = pokemon.imgUrl


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

// //----------------------------------------------------Modal Section End---------------------------------------------------


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
