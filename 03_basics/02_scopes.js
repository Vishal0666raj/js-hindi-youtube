var c = 300      //global scope
let a = 100

if(true){        //block scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);


//----------->>>>>>>>>>>>

function one(){
    const username = "Vishal"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }

    // console.log(website);
    two()
    
}

one();

if(true){
    const username = "Vishal"
    if(username === "Vishal"){
        const website = "Youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


//++++++++++++++++++intersting (hoisting) +++++++++++

addOne(6); 

function addOne(num){
    return num + 1;
}


// addtwo(6);
const addtwo = function(num){
    return num + 1;
}

addtwo(6);




