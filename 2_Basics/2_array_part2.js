const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"];

marvelHeroes.push(dcHeroes);
console.log("Marvel Heroes after pushing DC Heroes:", marvelHeroes);
console.log(marvelHeroes[5][1]);
console.log("-----------------------\n");


const allHeros = marvelHeroes.concat(dcHeroes);
console.log("Marvel Heroes after concat DC Heroes:", allHeros);
console.log("-----------------------\n");

const all_new_Heros = [...marvelHeroes, ...dcHeroes];
console.log("All Heroes using Spread Operator:", all_new_Heros);
console.log("-----------------------\n");

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log("-----------------------\n");


console.log(Array.isArray("Tanishq"));
console.log(Array.from("Tanishq"));
console.log(Array.from({ name: "Tanishq" })); // Not an array-like object
console.log("-----------------------\n");

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));