// Exercise 1 — setTimeout

// Print "Start", then use setTimeout() to print "Finished" after two seconds, then print "End" immediately.

console.log("start");

setTimeout(()=>console.log("Finished"),2000)
console.log("End")

// Exercise 2 — Promise

// Create a Promise that resolves with "Task completed!".

// Use .then() to print the result.

let myPromise = new Promise((resolve,reject)=>{
    if(true){
        resolve("Task completed!");
    }
    else{
        reject("task not completed!");
    }
})

myPromise.then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})


// Exercise 3 — Async/Await

// Create a function called getUser() that returns a Promise resolving with:
// { id: 1, name: "Abel" }


// after one second.

// Create an async function that awaits getUser() and prints the returned user.

function getUser(){
    
          return new Promise((resolve,reject)=>{ 

            setTimeout(()=>{
            resolve({ id: 1, name: "Abel" });
          },1000)

    })

   
}

async function waiter_function() {
    try {
        const result = await getUser();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

waiter_function();

// Exercise 4 — API request

// Use fetch() to request:

// https://jsonplaceholder.typicode.com/posts/1

// Use async/await and try/catch.

// Print the post's title and handle errors.

async function getData() {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await result.json();

        console.log(data);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

getData();


// Challenge 1: Delayed Promise
// Your task:
// 1. Create a function called getMessage().
// 2. It must return a Promise.
// 3. Use setTimeout() to resolve the Promise after 2 seconds.
// 4. The resolved message must be "Welcome to async JavaScript!".
// 5. Create an async function called displayMessage().
// 6. Use await to get the message and print it.
// 7. Call displayMessage().

function getMessage(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Welcome to async JavaScript!");
        },2000)
    })
}

async function displayMessage() {
    let result = await getMessage();

    console.log(result);
    
}

displayMessage();


// Your task:

// Create a function called getUser() that:
// 1. Returns a Promise.
// 2. Waits 1 second using setTimeout().
// 3. Rejects with the message "Failed to fetch user!".
// Then create an async function called displayUser() that:
// 1. Uses await to call getUser().
// 2. Uses try/catch to handle the rejection.
// 3. Prints the error message inside catch.

function getUser(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Failed to fetch user!");
        },1000);
    })

}
async function displayUser(){
    try{

        const result = await getUser();

        console.log(result)


    }catch(error){
        console.log(error);
    }
}

// Challenge 3: Fetch API — Loading, success and errors
// Now let's combine everything.

// Create an async function called getPost().

// Requirements:
// 1. Fetch this URL:
//    https://jsonplaceholder.typicode.com/posts/1
// 2. Check response.ok.
// 3. If the response is unsuccessful, throw an error.
// 4. Convert the response into JSON.
// 5. Print only:
//    - Post title
//    - Post body
// 6. Handle errors using try/catch.
// 7. Call getPost().

async function getPost(){
    try{

    let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if(!data.ok){
        throw new Error(" we got error");
        
    }
    else{
        let result = await data.json();
        console.log(result.title);
        console.log(result.body);

    }
}catch(error){
    console.log(error);
    
}

}
getPost();


// Challenge 4: Multiple API requests
// Difficulty: Intermediate
// Now let's practice fetching multiple posts.

// Your task:
// 1. Create an async function called getPosts().
// 2. Fetch this URL:
   
//    https://jsonplaceholder.typicode.com/posts
// 3. Check response.ok.
// 4. Convert the response into JSON.
// 5. Print the titles of the first five posts using a loop.
// 6. Handle errors using try/catch.

async function getPosts(){
    try{

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")

    if(!response.ok){
        throw new Error("we got error");
    }
    else{
        let result = await response.json();
        for(let i=0;i<5;i++){
            console.log("title of ",i+1," post is ", result[i].title)
        }

    }}
    catch(error){
        console.log("we got this error: ",error)
    }
}


// Challenge 5: Combine API data with array methods
// Difficulty: Intermediate+
// Use the same API:

// https://jsonplaceholder.typicode.com/posts

// Your task:
// 1. Fetch all posts.
// 2. Check for HTTP errors.
// 3. Use .filter() to select posts where userId === 1.
// 4. Use .map() to extract only their titles.
// 5. Print the resulting titles.
// 6. Handle errors with try/catch.

