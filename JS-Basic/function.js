console.log('kya haal') 


//function declaration

//function run hoone se pehle he sare side hoke upar chale jata hai is know asa hoisting
run()
function run(){
    console.log('running')
}

//function assingment

let stand = function walk(){
    console.log('walking')
} 

//ananaymous function
let stand2 = function(){
    console.log('walking')
} 
//walk() syntax error no hoisting allowded
stand()
console.log(stand)

let jump = stand;

jump()
stand2()



let x = 1;
x = 'a';

console.log (x) 

function sum(a,b){
    console.log(arguments)
    return a+b;
}

console.log(sum(6,8,5,4,3,2))
