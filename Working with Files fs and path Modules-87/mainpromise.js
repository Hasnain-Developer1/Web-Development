import fs from "fs/promises"

let a = await fs.readFile("Hasnain.txt")

let b = await fs.appendFile("Hasnain.txt", "\n\n\n\nHello this is an amazing promise")
console.log(a.toString(), b);

