// Create a function named introduce that accepts a name and age, then prints:

// My name is Abel and I am 22 years old.

// Use your own name and age when calling it.

// Exercise 2 — Return values
// Create a function named calculateTotal that accepts two numbers and returns their sum.

// Store the returned value in a variable and print it.

// Exercise 3 — Arrow functions
// Create an arrow function named calculateArea that accepts width and height and returns the area of a rectangle.

// Test it with width 5 and height 4.

// Exercise 4 — Callbacks
// Create:
// - A function named completeTask that accepts a task title and a callback.
// - It should print "Completed: [task title]".
// - Then it should execute the callback.
// - Create a callback function that prints "Great job!".
// - Call completeTask with "Learn JavaScript" and your callback.

function introduce(name,age){

    const content = "my name is "+ name+ " and i am "+ age+" years old.";

    return content;
}

console.log(introduce("yisak",21))

const calculateTotal = (num1,num2)=> num1+num2;

const result = calculateTotal(2,3);

console.log(result)

const calculateArea= (width,height)=> width*height;

const area =  calculateArea(2,4);

console.log(area)

function completeTask(title,callback){

console.log(`Completed: [${title}]`)

console.log(callback());

}

function printer(){
    return "Great job!";
}

completeTask("Learn JavaScript",printer);


function processNumbers(numArray,callback){

let new_array =numArray.map((num)=>num*2);

return callback(new_array);
}

function backer(new_array){

    return new_array

}

let org_array = [2, 4, 6, 8];

console.log(processNumbers(org_array,backer));


