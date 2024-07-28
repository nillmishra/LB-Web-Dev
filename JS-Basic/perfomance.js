const t1 = performance.now();
console.log(t1)

for(let i = 1; i<=100; i++){
    let newElement = document.createElement('p')
    newElement.textContent = 'This is para' + i
    document.body.appendChild(newElement)
}

const t2 = performance.now();
console.log(t2)
console.log(t2-t1)



const t3 = performance.now();
console.log(t3)
let myDiv = document.createElement('div')

for(let i = 1; i<=100; i++){
    let element = document.createElement('p')
    element.textContent = 'This is para' + i
    myDiv.appendChild(element)
}
document.body.appendChild(myDiv)


const t4 = performance.now();
console.log(t4)
console.log(t4-t3)