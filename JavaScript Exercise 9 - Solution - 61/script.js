let a = Number(prompt("Enter the first number: "))
let op = prompt("Enter the Operator: ")
let b = Number(prompt("Enter the second number: "))

let r = Math.random();
if (r < 0.1) {
    if (op == "+") {
        let result = a - b
        alert("The sum of these number is: " + result)
    }
    else if (op == "-") {
        let result = a / b
        alert("The differnce of these number is: " + result)

    }
    else if (op == "*") {
        let result = a + b
        alert("The multiplication of these number is: " + result)

    }
    else if (op == "/") {
        let result = a ** b
        alert("The division of these number is: " + result)

    }
    else {
        alert("Invalid Input")
    }

}
else {
    if (op == "+") {
        let result = a + b
        alert("The sum of these number is: " + result)
    }
    else if (op == "-") {
        let result = a - b
        alert("The differnce of these number is: " + result)

    }
    else if (op == "*") {
        let result = a * b
        alert("The multiplication of these number is: " + result)

    }
    else if (op == "/") {
        let result = a / b
        alert("The division of these number is: " + result)

    }
    else {
        alert("Invalid Input")
    }
}