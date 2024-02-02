// Not curently functional
import readline from "readline"

//function to ask questions
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

//fetch all pokemon data from pokeapi
const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
const allPokemon = await response.json();

//convert allPokemon.results from array of objects to array of names
const pokemonNames = allPokemon.results.map((element) => element.name);

let answer = await ask("What's your favorite pokemon ");
// console.log(answer);
 function favoritePokemon(answer) {
    str1 = "That's a great Pokemon"
    str2 = "That is not a discovered Pokemon, Please tell me your favorite Pokemon"
    if (answer == pokemonNames) {
     return console.log(str1)
} else {
     return console.log(str2)
}};

//end you code
process.exit();