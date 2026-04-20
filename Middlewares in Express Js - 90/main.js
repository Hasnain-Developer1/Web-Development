const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1 logger for our application 
app.use((req, res, next) => {
    console.log(req.headers);
    req.Hasnain = "I am Hasnain Malik";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send('Hacked by Middleware 1')
    next()
})

// Midleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.Hasnain = "I am Malik";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About!' + req.Hasnain)
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
