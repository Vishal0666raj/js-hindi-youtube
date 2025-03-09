const tinder = new Object()

const tinder1 = {}

// console.log(tinder);
// console.log(tinder1);

tinder.id = "123abc"
tinder.name = "Vishal"
tinder.isLoggedIn = false

// console.log(tinder.id);

const regularUser = {
    id: "123ABC",
    name: {
        fullName : {
            userName:{
                firstName : "Vishal",
                lastName : "Raj Rawani"
            }
        }
    }
}

// console.log(regularUser.name.fullName.userName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({},obj1 ,obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}  //spread operator

// console.log(obj4);

//array mai objects 
const arr = [{
    id: "1a",
    name: "Vishal"
},
{
    id: "1b",
    name: "scientist"
},
{
    id: "1c",
    name: "Bullet"
}]

// console.log(arr);
// console.log(arr[0].name);

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty("isLoggedIn"));




//++++++ Destucture and Api call ++++++++++++++

const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Vishal"
}

course.courseInstructor;

const {courseInstructor: instructor} = course

console.log(instructor);



//----->>>> API 
// the database or data that it fetch will be in form of json 

// {
//     "Name": "Vishal",
//     "CourseName": "js in hindi",
//     "Price": "Free"
// }

// [
//     {},
//     {},
//     {}
// ]







