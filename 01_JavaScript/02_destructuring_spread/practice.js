const student = {
    name: "Sara",
    age: 21,
    university: "AASTU"
};


const {name,age,university}= student;


console.log(name);
console.log(age);
console.log(university);


const fruits = ["Apple", "Banana", "Orange", "Mango"];

const [firstFruit,,thirdFruit] = fruits;

console.log(thirdFruit);

const oldTasks = ["Learn JavaScript", "Learn React"];

const allTasks = [...oldTasks,"Build TaskFlow" , "Learn APIs"];

const task = {
    title: "Learn React",
    completed: false,
    priority: "medium"
};


const updatedTask = {...task,completed: true}

