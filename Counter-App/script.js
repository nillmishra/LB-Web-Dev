const cosnstVal = document.getElementById('output')

const increment = () => {
    let value = parseInt(cosnstVal.innerText);
    value = value + 1;
    cosnstVal.innerText = value;
}


const decrement = () => {
    let value = parseInt(cosnstVal.innerText);
    value = value - 1;
    cosnstVal.innerText = value;
} 