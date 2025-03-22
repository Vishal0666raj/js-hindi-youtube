// for of 
// [" " , " "]
// [{}, {}, {}]

const arr = [1,2,3,4,5,6,7,8,9];

for (const val of arr) {
    // console.log(`The value of arr is ${val}`);
    
}

const greetings = "Hello world , Louda chus lo."

for (const greet of greetings) {
    // console.log(`The char is : ${greet}`);
    
}



// map 

const map = new Map()
map.set('In' , "India")
map.set('Usa', "United States of America")
map.set('Fr' , "France")
map.set('In' , "India")

// console.log(map);

for (const key of map) {
    //  console.log(key);
        
}

for (const [key, value] of map) {
    // console.log(key + ":-" + value);
    
}



const myObject = {
    game1 : "Pubg",
    game2 : "COD",
    game3 : "Free Fire"
}

// for (const [key , value] of myObject) {
//     console.log(key + value);
    
// }    using for_of loop for object is not working 
