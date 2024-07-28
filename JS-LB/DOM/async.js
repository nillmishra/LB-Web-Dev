setTimeout(function(){
    console.log('third')
}, 4000)
function sync(){
    console.log('first')
}
sync();
console.log('second');