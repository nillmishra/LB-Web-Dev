
//adding an element
let arr = [1,6,7,3,2,4];
console.log(arr);
arr.push(9);
console.log(arr);
arr.unshift(90);
console.log(arr);
arr.splice(2, 0, 'a', 'f', 'o','k')
console.log(arr);

//searching

if(arr.indexOf(2) != -1)
    console.log("present")

console.log(arr.includes(1));

console.log(arr.indexOf(4, 2)); 

//object array

let courses = [
    {no:1, naam:'Nill'},
    {no:2, naam:'Snehasish'}
]

console.log(courses);
console.log(typeof(courses));

console.log(courses.indexOf({no:1, naam:'Nill'},)); //not ruunig
console.log(courses.includes({no:1, naam:'Nill'},));


//callback
let course2 = courses.find(function(courses){
    return courses.naam === "Nill"
})

console.log(course2);

//arrow function
let course3 = courses.find(course => course.naam === "kilwish")
console.log(course3);

//removing an element

let number = [1,2,3,4,5,6,7,8];
console.log(number);
number. pop()
console.log(number);
number.shift()
console.log(number)
number.splice(2, 1)
console.log(number)


//empty array 

let numbers = [1,2,3,4,5,6]
let numbers2 = numbers;
// numbers =[]
numbers.length = 0;
console.log(numbers)
console.log(numbers2)

//combining and slicing array

let first=[1,2,3]
let second =[4,5,6]

let combined = first.concat(second);
console.log(combined)
console.log(combined.slice(1 ))
console.log(combined.slice(1, 3 ))

let one = [9,8,7]
let two =[7,6,5]
let combo = [...one,'kay re bahdwe', ...two]
console.log(combo)

//itterating array

let looparr = [10,20,30,40,50,60]
for (const value of looparr) {
    console.log(value);    
}


looparr.forEach(function(num){
    console.log(num);
})

looparr.forEach(num => console.log(num))


//joining 

let joined = looparr.join(',');
console.log(joined)

let message = 'This is my first message'
let parts = message.split(' ')
console.log(parts) 
let joined2 = parts.join(' ');

console.log(joined2) 

//sorting

let sortify = [30,20,60,40,10,70]
console.log(sortify.sort())
console.log(sortify.reverse())

//filtering

let newnum = [1,4,5,-4,-3,-1]

let filtered = newnum.filter(function(value){
    return value >= 0;
})

console.log(filtered)

//mapping array

let itemnum = [1,2,3,4,5,6]

let item = itemnum.map(function(value){
    return 'student_no' + value;
})

console.log(item)

//mapping with obj

// let morenum = [1,2,-6,-4]
// let filterr = morenum.filter(value => value >= 0)
// let items = filterr.map(function(num){
//     let object = {value : num};
//     return object;
// })
// console.log(filterr)
// console.log(items)


//chaining
let items = [1,2,-6,-4]
            .filter(value => value >= 0)
            .map(function(num){
    let object = {value : num};
    return object;
})
console.log(items)

//reducing array

let arr9 = [1,2,3,4,5,6];
let total = 0;

for(let value of arr9){
    total = total + value;
}

console.log(total);

let totalSum = arr9.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


console.log(totalSum);