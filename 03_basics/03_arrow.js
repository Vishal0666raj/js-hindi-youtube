const user = {
    username: "Vishal",
    price: 150,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to the Website.`);
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);


//it is working fine even in function as well when i am specifying it as let or const 
// function chai(){
//     user1 = "Vishal";
//     console.log(this.user1);
    
// }

// chai();


//here after using let and const this is not working 
// const chai = function(){
//     const  user1 = "Vishal";
//     console.log(this);
// }


// const chai = () => {
//     let username = "Vishal";
//     console.log(this);
    
// }

// chai();


// const var1 = (num1, num2) => {
//     return num1+num2;
// }

// console.log(var1(2,3));

// const var1 = (num1,num2) => num1 + num2

// const var1 = (num1,num2) => (num1+num2)

// console.log((var1(2,3)));


const var2 = () => ({username: "Vishal"})
console.log(var2());






