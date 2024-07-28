let fragment = document.createDocumentFragment()

for(let i =1; i <=100; i++){
    let element = document.createElement('p')
    element.textContent = 'This is para ' + i

    fragment.appendChild(element);
}
document.body.appendChild(fragment);