// async function getdata() {
//     // Simulate Getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("455");
//         }, 3500);
//     });
// }
// settle means resolve or reject

// resolve means promise has been settled successfully
// rejected means promise has not been settled successfully
async function getdata() {
    // // Simulate Getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    console.log(data);
    return data;
    
    //   .then(response => response.json())
    //   .then(json => console.log(json))
}

async function main() {
    console.log("Loading Module");

    console.log("Do something else");

    console.log("Load Data");

    
    let data = await getdata();
    
    console.log("Data");
    
    console.log("Process Data");
    
    console.log("Task 2");
}

main();

// data.then((v) => {
    // console.log(data);
    
//     console.log("Data");

//     console.log("Process Data");

//     console.log("Task 2");
// })

