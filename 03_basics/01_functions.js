function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("l");   
}

// sayMyName  --->>> refernce of the function
// sayMyName()  //Now execution

// function addTwoNumbers(a,b){  // here a and b are parameters
//     console.log(a+b);
    
// }

// addTwoNumbers(2,3);  //here 2 and 3 are arguments


function addTwoNumbers(a,b){ 
    console.log("Yha se suru:");
     
    let result = a + b;
    return result;
    
    console.log("Yha par khatam.");
    
    
}

let result = addTwoNumbers(2,3);
// console.log(`Result : ${result}`);


// function loginUserMessage(username){
//     return `Welcome ${username} ,You just logged in.`
// }

// console.log(loginUserMessage("Vishal"));

function loginUserMessage(username){
    if(username === undefined){
        console.log("You have to first provide a proper Username.");
        return   
    }

    return `Welcome ${username}, You just have Logged in.`
}

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("You have to first provide a proper Username.");
        return   
    }

    return `Welcome ${username}, You just have Logged in.`
}

// console.log(loginUserMessage());

//-------- rest operator ---------
function calculateCartprice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartprice(100,200,300,400,500,600));


const user = {
    username: "Vishal",
    prices: 199
}

function handleObject(anyObject){
     console.log(`Name is ${anyObject.username} and the price is ${anyObject.prices}`);
     
}

// handleObject(user);
handleObject({
    username: "bullet",
    prices: "150"
})

const myArray = [100,200,300,400,500]

function returnSecondvalue(getArray){
     return getArray[1];
}

// console.log(returnSecondvalue(myArray));
console.log(returnSecondvalue([1,2,3,4,5]));







