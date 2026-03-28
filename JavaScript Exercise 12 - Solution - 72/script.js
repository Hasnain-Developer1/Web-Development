console.log("script.js Initializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children



function getRandomColor() {
    let val1 = Math.ceil(Math.random() * 255)
    let val2 = Math.ceil(Math.random() * 255)
    let val3 = Math.ceil(Math.random() * 255)

    return `rgb(${val1}, ${val2}, ${val3})`

}
Array.from(boxes).forEach(e => {
    e.style.background = getRandomColor()
})

// Math.ceil(0 + Math.random()* 255) 

// console.log(boxes)

// Array.from(boxes).forEach((e) => (
//     console.log(e)
// ))

Array.from(boxes).array.forEach(e => {
    return 'rbg(${val1}, ${val2}, ${val3} )'
});
Array.from(boxes).array.forEach(e => {
    e.style.background = getRandomColor()
    e.style.background = Color()
});