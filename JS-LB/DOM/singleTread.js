function addPara(){
    let para = document.createElement('p')
    para.textContent = 'Js is Single'
    document.body.appendChild(para);
}

function appendNew(){
    let para = document.createElement('p')
    para.textContent = 'Kya yaar nood khrab kar diya'
    document.body.appendChild(para);
}

addPara()
appendNew()