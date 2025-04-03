const promiseOne = new Promise(function(resolve,reject){
     //Do an async task
    //  DB calls , network , cryptography 
    setTimeout(function(){
        console.log("Aysnc task is cmpl.")
        resolve()

    },1000)
})

promiseOne.then(function(){
     console.log("Promsie Cmpld.")  
}).catch().finally()


new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log("Aysnc task 2 cmpld.")
       resolve() 
    },1000)
}).then(function(){
    console.log("Async task 2 is resolved.")
}).catch().finally()


const promiseThree = new Promise((resolve,reject)=>{
     setTimeout(function(){
       resolve({username:"Vishal", email:"Vishal91648@gmail.com"})
     },1000)
})

promiseThree.then(function(user){
     console.log(user)
     console.log("Task three till.")
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Vishal", email:"Vishal91648@gmail.com"});
        }
        else{
            reject('Error : Something went wrong.')
        }
    },1000)
})

// promiseFour.then(function(user){
//     console.log(user)
//     return user.username;
// }).then(function(username){
//      console.log(username)
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("The Promise is either Resolved or Rejected."))

async function consumePromiseFive(){
    try{
       const response = await promiseFour;
       console.log(response);
    }
    catch(error){
       console.log(error)
       console.log("Till fifth.")
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try{
//        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//     //    console.log(response);
//        const data = await response.json()
//        console.log(data)
//     }
//     catch(error){
//          console.log(`Error : ${error}`);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
     return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(()=> console.log(`Error : ${error}`));

