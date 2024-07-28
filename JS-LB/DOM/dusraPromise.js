let waadaa1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('setimeout1 started')
    }, 2000)
    resolve(true)
})

let output = waadaa1.then(() =>{
    let waadaa2 = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('setimeout2 started')
        }, 3000)
        resolve("waadaa2 resolved")
    })
    return waadaa2
})

output.then((value) => console.log(value))