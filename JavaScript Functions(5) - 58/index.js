function nice(name) {
    console.log("Hey " + name + " is a Nice Person")
    console.log("Hey " + name + " is a Good Boy!")
    console.log("Hey " + name + " is a Developer")
    console.log("Hey " + name + " is a Programmer")
}
// console.log("Hasnain Malik is a Good Boy!")
// console.log("Hasnain Malik is a Developer")
// console.log("Hasnain Malik is a Programmer")

// nice("Umair")
// nice("Hasnain Malik")

function sum(a, b, c = 3) { // here value of c is default agr value pass kro ga to yaha change ho jy ge
    // console.log(a + b);
    return a + b + c

}

// sum(5,3)
result1 = sum(5, 3) // NAN
result2 = sum(13, 9)
result3 = sum(5, 90, 10)

// console.log("Sum of these number is " + result1)
// console.log("Sum of these number is " + result2)
// console.log("Sum of these number is " + result3)


const funt1 = (a)=>{
    console.log("Hey I am a number " , a)

}

funt1(12)
funt1(92)
funt1(19)


