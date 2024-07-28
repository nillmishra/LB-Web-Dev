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

function sum1(a,b){
    let total =0;
    for(let value of arguments)
        total = total + value;
    return total;
}

let ans = sum1(6,8,5,4,3,2)
console.log(ans)

//rest function
function sum2(...args){
    console.log(args)
} 
sum2(1,2,3,4,5,6)

function sum2(nm, arr, ...args){
    console.log(args)
} 
sum2(1,2,3,4,5,6)

//default parameter

function interest(p, r, y){
    return p*r*y/100;
}

console.log(interest(1000, 10,5))

function interest1(p, r=5, y=10){
    return p*r*y/100;
}

console.log(interest1(1000,8))

let person = {
    fname : 'Nill',
    lName : 'Mishra'
}

console.log(person)


function fulName(){
    return `${person.fname} ${person.lName}`
}
console.log(fulName())

//getter and setter

//getter => acess properties
//setter => change or mutate properties

let person1 = {
    fname : 'Nill',
    lName : 'Mishra',

    get fullNaam(){
        return `${person1.fname} ${person1.lName}`
    },
    set fullNaam(value){
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lName = parts[1];
    }
} 
person1.fullNaam = 'Snehasish Das'

console.log(person1.fullNaam)


let person3 = {
    fname : 'Prashant',
    lName : 'Kumar',

    get fullNaam(){
        return `${person3.fname} ${person3.lName}`
    },
    set fullNaam(value){
        if(typeof value !== 'String'){
            throw new Error("You have not sent a string")
        }
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lName = parts[1];
    }
} 
try {
    person3.fullNaam = true
    
} catch (e) {
    alert(e)
}



console.log(person3.fullNaam)

{
    //let c = 5; syntax error 
    var c = 5;
}

console.log(c)

