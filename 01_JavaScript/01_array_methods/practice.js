const tasks = ["Study React", "Practice JS", "Build a project"];

tasks.forEach((task)=> console.log(task))

const numbers = [2, 4, 6, 8];

let numbers_tripled = numbers.map((number)=> {return number*3})

const ages = [12, 18, 25, 15, 30, 16];

let adults_age= ages.filter((age)=>{return age>=18})

const users = [
    { id: 1, name: "Sara" },
    { id: 2, name: "Abel" },
    { id: 3, name: "John" }
];

let find_user = users.find((user)=>{return user.id==2})