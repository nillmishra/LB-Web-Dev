// //synchronous code
// let merPromise = new Promise(function(resolve, reject){
//     console.log("kay hai bee")
//     resolve(7890)
// })
// console.log("ok bhai")


// //asynchronous code resolve
// let aPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Hi')
//     }, 5000)
//     resolve(7890)
// })
// console.log("mamla set hai")

// //asynchronous code reject

// let noPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Naa Bhai')
//     }, 5000)
//     reject(new Error('dikkat lag raha hai'))
// })
// console.log("Laga le 500")



let pinkyPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("I'm inside Promise1")
    }, 5000)
    //resolve(8737909)
    reject(new Error('dikkat lag raha hai'))
})

// pinkyPromise.then((value) => {console.log(value)})

// pinkyPromise.catch((error) => {console.log("Recived an error")})
pinkyPromise.then((value) => {console.log(value)}, (error) => {console.log("Recived an error")})


