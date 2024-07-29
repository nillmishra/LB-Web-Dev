async function abcd(){
    console.log("Nill Mishra")
    return 7;
}
console.log(abcd())

async function utility(){
    let delhiClimate = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve('thoda garmi hai yaha')
        },4000)
    })
    
    let hydClimate = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve('ekdum cool hai bro')
        },6000)
    })
    let dM = await delhiClimate;
    let hM = await hydClimate;
    return [dM, hM]
}