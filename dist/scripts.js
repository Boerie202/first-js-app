let pokemonRepository=function(){let e="https://pokeapi.co/api/v2/pokemon/?limit=150",t=[];document.querySelector("#pokedex"),document.querySelector("#image-container");function n(e){t.push(e)}function o(e){pokemonRepository.loadDetails(e).then(function(){!function(e){let t=$(".modal-body"),n=$(".modal-title");n.empty(),t.empty();let o=$('<h5 class="text-capitalise">'+e.name+"</h5>"),i=$("<p>Height: "+e.height+"0 cm</p>"),c=$("<p>Weight: "+e.weight+" kg<p>"),l=$('<img src"">');l.attr("src",e.imageUrl),n.append(o),t.append(l),t.append(c),t.append(i),$("#pokedex").modal()}(e)})}return{add:n,getAll:function(){return t},addListItem:function(e){let t=document.querySelector(".pokemon-list"),n=document.createElement("li"),i=document.createElement("button");i.innerText=e.name,i.classList.add("button-class"),n.appendChild(i),t.appendChild(n),i.addEventListener("click",function(){o(e)})},showDetails:o,loadList:function(){return fetch(e).then(function(e){return e.json()}).then(function(e){e.results.forEach(function(e){n({name:e.name,detailsUrl:e.url})})}).catch(function(e){console.error(e)})},loadDetails:function(e){let t=e.detailsUrl;return fetch(t).then(function(e){return e.json()}).then(function(t){e.imageUrl=t.sprites.front_default,e.height=t.height,e.weight=t.weight}).catch(function(e){console.error(e)})}}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(e){pokemonRepository.addListItem(e)})});
