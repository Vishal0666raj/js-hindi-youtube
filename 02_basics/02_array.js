const marvel_heros = ["Iron Man","Thor", "Captian America"]

const dc_heros = ["Batman", "Superman", "Flash"]

marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);
marvel_heros.pop();


// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usable_another_array = anotherArray.flat(Infinity);
// console.log(usable_another_array);


console.log(Array.isArray("Vishal"));

console.log(Array.from("Vishal"));
console.log(Array.from({name: "Vishal"}));  //Interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

