const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// app.get app.post app.put app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/About', (req, res) => {
    res.send('About Us')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact me')
})


// for URL http://127.0.0.1:3000/Blog/hasnian?mode=dark&region=in
app.get('/blog/:slug', (req, res) => {
    //Logic to fetch ${slug} from DB
    console.log(req.params);  // Will output slug: Hasnain
    console.log(req.query);  // Will output node: mode: "dark", region: "in"
    
    res.send(`Hello intro to ${req.params.slug}`)   
})

// app.get('/Blog/intro-to-js', (req, res) => {
//     //Logic to fetch intro to js from DB
//     res.send('Hello Blog lets learn JS')
// }) 

// app.get('/Blog/intro-to-python', (req, res) => {
//     //Logic to fetch intro to python from DB
//     res.send('Hello Blog lets learn Python')
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
