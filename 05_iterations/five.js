// foreach 

const coding = ["Cpp", "Html", "Jss" , "Css"]

coding.forEach( function (val) {
    //  console.log(val);
     
} )

coding.forEach( (val) => {
    //  console.log(val);
     
} )



function printMe(item) {
    console.log(item);
    
}

// coding.forEach( printMe )

// coding.forEach( (item,index,arr) => {
//      console.log(`${item} : ${index} : ${arr}`);
     
// } )


coding.forEach( (val,index,arr) => {
    // console.log(val,index,arr);
    
} )


const Myarr = [
    {name : "Vishal",
        Age : 21
    } ,

    {name1 : "Ayush",
        Age : 21
    } , 

    {name : "Swapnil",
        Age : 23
    }
]

Myarr.forEach( (item) => {
      console.log(item.name1);
      
} )

