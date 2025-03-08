//singleton -->>> tabhi bnta hai jab when we use constructor to create it 
// object.create

//object literals

const sym1 = Symbol();
const sym2 = Symbol();



const JsUser = {
    name : "Vishal",
    "FullName" : "Raj Rawani",
    age  :  21,
    [sym1] : "Loura Lasan",
    location: "Chandigarh",
    email : "vishal91648@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monady", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser.location);
// console.log(JsUser["FullName"]);
// console.log(JsUser[sym1])
// console.log(typeof JsUser[sym1]);

JsUser.email = "Jimmy91648@gmail.com";

// console.log(JsUser.email);
// Object.freeze(JsUser);

JsUser.email = "Krx0666@gmail.com"
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("hello loru");
    
}

console.log(JsUser.greeting());

JsUser.lasan = function(){
    console.log(`I am , ${this.name}`);
    
}

console.log(JsUser.lasan());











