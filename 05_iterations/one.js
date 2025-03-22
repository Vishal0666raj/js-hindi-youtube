// for 

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==7){
        // console.log("7 is the best no.");
        
    }
    // console.log(index);
    
    
}


for (let i = 0; i < 10; i++) {
        // console.log(`Outer loop : ${i}`);
        
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop : ${j} and its Outer loop : ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
}




let array = ["Batman", "Iron man" , "Captian America"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
    
}



// break and continue 

for (let index = 0; index < 20; index++) {
if(index == 7){
   break; 
}

    // console.log(`Value of i : ${index}`);
    
    
}



for (let index = 0; index < 20; index++) {
    if(index == 7){
       console.log(`7 is detected`);
       continue; 
    }
    
        console.log(`Value of i : ${index}`);
        
        
    }