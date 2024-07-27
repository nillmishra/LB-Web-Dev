function newfunction (){
    console.log('aur bc kya haal')
}
//adding eventlistner
document.addEventListener('click', newfunction)

//remove event listner
document.removeEventListener('click', newfunction)

let content = document.querySelector('h1')
content.addEventListener('click', function(){
    content.style.background = 'red';
})


//default
let links = document.querySelectorAll('a')
let thirdlink = links[2]

thirdlink.addEventListener('click', function(event){
    event.preventDefault();
    console.log('maja aya bc')
})



// function newfun(event){
//     console.log('i have clicked on para')

// }

// let myDiv = document.createElement('div')

// for(let i = 1; i<=100; i++){
//     let newElement = document.createElement('p')
//     newElement.textContent = 'This is para' + i

//     newElement.addEventListener('click', newfun)
//     myDiv.appendChild(newElement)
// }
// document.body.appendChild(myDiv)

//nodeName 
//event.target


let myDiv = document.createElement('div')
function newfun(event){
    if(event.target.nodeName === 'P'){
        console.log(event.target.textContent)
    }
}

myDiv.addEventListener('click', newfun)

for(let i = 1; i<=100; i++){
    let newElement = document.createElement('p')
    newElement.textContent = 'This is para' + i
    myDiv.appendChild(newElement)
}
document.body.appendChild(myDiv)