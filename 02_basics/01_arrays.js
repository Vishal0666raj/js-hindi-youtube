//array

const myArr = [0,1,2,3,4,5,6,7]

const myHeros = ["shaktiman" , "Nagraj"]

const mrArr2 = new Array(1,2,3,4,5);
// console.log(myArr[1]);
// console.log(myArr);



//Arrays Methods --->>>

myArr.push(8);
// console.log(myArr);
myArr.pop();
// console.log(myArr);

//unshift is not a ideal method to add element at the first of the array as it will be shift every element 
myArr.unshift(-1);
// console.log(myArr);
myArr.shift();
// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(-2));

// using join it changed into string 
const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);


//splice and slice 
//in splice -> will inlcude the last element as well and will remove that whole slice from the original array

console.log("A", myArr.join());

const myn1 = myArr.slice(1,3);

console.log(myn1.join());
console.log("B" , myArr.join());

//splice

console.log("a" , myArr.join());
const mya1 = myArr.splice(1,3);
console.log(mya1);
console.log("b" , myArr.join());














