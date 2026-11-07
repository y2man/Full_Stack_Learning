const tasks = [
    { id: 1, title: "Learn JavaScript", completed: true },
    { id: 2, title: "Learn React", completed: false },
    { id: 3, title: "Build TaskFlow", completed: false },
    { id: 4, title: "Practice APIs", completed: true }
];


/* challeng

Write code to:
1. Use filter() to get only incomplete tasks.
2. Use map() to create a new array containing only task titles.
3. Use find() to find the task with id: 3.
4. Use forEach() to print every task title.


*/
let incomplete_tasks = tasks.filter((task)=>{return task.completed==false})

let task_titles = tasks.map((task)=>{return task.title})

let find_task = tasks.find((task)=>{return task.id==3})

tasks.forEach((task)=>console.log(task.title))


