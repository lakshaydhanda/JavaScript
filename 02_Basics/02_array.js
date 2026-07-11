const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// In this case *.push*. It actually return on exsiting array.


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros =marvel_heros.concat(dc_heros)
// console.log(allHeros);

// In the case of *.concat* it will return on new array.

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

const another_array = [1, 2, 3, 4, 5, [6, 7, 8, 9], 10, 11, 12, [13, 14, 15, 16, [17, 18, 19, 20, 21]]];

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Lakshay"))
console.log(Array.from("Lakshay"))
console.log(Array.from({name: "Lakshay"})) // interesting
console.log(Array.of({name: "Lakshay"})) 

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3))
