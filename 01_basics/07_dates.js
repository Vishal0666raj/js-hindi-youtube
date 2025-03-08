let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2025,2,14);
// let myCreatedDate = new Date(2025,2,14,5,3);
// let myCreatedDate = new Date("2025-03-14");
// let myCreatedDate = new Date("14-03-2025");

// console.log(myCreatedDate.toLocaleString());


//timestamp
const start = Date.now(); // Start time

// Simulate some process
for (let i = 0; i < 1e6; i++) {} 

const end = Date.now(); // End time

const timeTaken = end - start; // Difference in milliseconds
console.log(`Time taken: ${timeTaken} ms`);


let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(Math.floor(Date.now()/1000));  //seconds mai change krne ka tarika 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);












