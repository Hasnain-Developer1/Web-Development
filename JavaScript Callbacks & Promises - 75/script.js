

console.log("Hasnain is a Hacker")
console.log("Ayyan is a Hecker")

setTimeout(() => {
    console.log("I am inside Timeout")
}, 0);

setTimeout(() => {
    console.log("I am inside Timeout 2")
}, 0);

console.log("The End")

const fn = (params) => {
    console.log("Nothing")
}

const callback = (arg) => {

}

const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src
    sc.onload = callback("Hasnain", fn)
    document.head.append(sc)

}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
    console.log(arg)
    fn("First argument", () => {
        ddg("secondarg", () => {

        })
    })
})