var pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Mudkip', 
      height: 1.04, 
      type: ['Water']
    },
    {
      name: 'Charmander', 
      height: 2.00 , 
      type: ['Fire']
    },
    {  
      name: 'Mew', 
      height: 1.04, 
      type: ['psychic']
    },
    {  
      name: 'Psyduck', 
      height: 2.07, 
      type: ['water']
    },
    {  
      name: 'Charizard', 
      height: 5.07, 
      type: ['fire', 'flying']
    }
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "height" in pokemon &&
    "type" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}
//new^

function getAll() {
  return pokemonList;
}
function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list"); //use the . to select a class from the html
  let listpokemon = document.createElement('li'); // created li element
  let button = document.createElement("button"); //created button element or tag, but need to render it in
  button.innerText = pokemon.name;
  button.classList.add("button-class"); //pulls the css properties from the class "button-class"
  listpokemon.appendChild(button); //appended the button into li
  pokemonList.appendChild(listpokemon); //appended the li into the ul, which is the parent

  button.addEventListener('click', function (event){
    console.log(pokemon.name);
  });

  return {
   add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});