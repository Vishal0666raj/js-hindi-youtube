myObject = {
    Navy : "1000",
    Army : "22000",
    AirForce : "560"
}

for (const key in myObject) {
   console.log(`${key} : ${myObject[key]}`);
   
}


myArray = ["Loura" , "Lasan ", "Gand Mara", "Bsdk"]

for (const key in myArray) {
    console.log(`${key} : ${myArray[key]}`);
    
}


const map = new Map()
map.set('In' , "India")
map.set('Usa', "United States of America")
map.set('Fr' , "France")
map.set('In' , "India")

for (const key in map) {
    console.log(key);
    
}