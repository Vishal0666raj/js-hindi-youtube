const name = "Vishal"
const repoCount = 50

// console.log(name + repoCount + " value");


// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const gameName = new String("VishalRajRawani");

console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

const str = gameName.toUpperCase;
str;
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));


const str2 = gameName.substring(0,4);
// console.log(str2);

const anotherString = gameName.slice(-8,12);
// console.log(anotherString);


const newStringOne = "  pratik   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "http://vishal%20raj%20rawani";
// console.log(url.replace('%20','-'));
// console.log(url.replace('%20','-'));
console.log(url.replace(/%20/g,'-'));


console.log(url.includes('raj'));
console.log(url.includes('rawa'));
console.log(url.includes('ara'));


const str4 = "Vishal-raj-rawani"
console.log(str4.split('-'));















