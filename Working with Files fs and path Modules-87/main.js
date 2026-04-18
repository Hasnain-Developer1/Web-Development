const fs = require("fs")
// const fs = require("fs/promises")

// console.log(fs);

console.log("Starting");
// fs.writeFileSync("Hasnain.txt", "Hasnain Malik is a Good Boy")

fs.writeFile("Hasnain2.txt", "Hey I am Hasnain Malik", ()=> {
    console.log("Done");
    fs.readFile("Hasnain2.txt", (error, data)=>{
        console.log(error, data.toString());
    })
    
})
fs.appendFile("Hasnain.txt", " Hasnainrobo", (e,d)=>{
    console.log(d);
    
})
console.log("Ending");


