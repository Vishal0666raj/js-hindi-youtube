let myNums = [1,2,3,4,5,6,7,8,9,10]

const val = myNums.map( (nums)=> nums + 10 )
// console.log(val);

// let val2 = []
// myNums.forEach( (nums)=>{
//     let el = nums + 10;
//     val2.push(el)
// } )

// console.log(val2);


// chaining method 
const val3 = myNums.map( (nums)=> nums * 10 ).map( (nums)=> nums + 1 ).filter( (nums)=> nums>=45 );
console.log(val3);

