// Primitve   ---  primitives are copied by value.



// 7 types : string , Number , Boolean , null , undefined , symbol , Bigint 

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 38478734864864876476n;

//Reference (non - primtive)  ----They are stored as references in memory.

// Array , Object and Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"Vishal",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof id);


//+++++++++++++++++++++++++++++++++++++++

//stack(primtive) and heap(non-primitve)
let myYoutubeName = "Vishal raj";
let anotherName = myYoutubeName;
anotherName = "V2raj";

console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
    name:"Loura",
    dusra_name:"lasan"
}

let userTwo = userOne;

userTwo.dusra_name = "Lasan sharma.";

console.log(userOne.dusra_name);
console.log(userTwo.dusra_name);



