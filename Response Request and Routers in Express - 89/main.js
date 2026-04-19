const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
  console.log("Hey its a get request");
  res.send('Hello World2!')
})

app.post('/', (req, res) => {
  console.log("Hey its a post request");
  res.send('Hello World Post')
}).put('/', (req, res) => {
  console.log("Hey its a put request");
  res.send('Hello World Put')
}).delete('/', (req, res) => {
  console.log("Hey its a delete request");
  res.send('Hello World delete')
})

app.get('/api', (req, res) => {

  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Hasnain", "Malik"] })
})

app.get('/index', (req, res) => {
  console.log("Hey its a index");
  res.sendFile('Templates/index.html', { root: __dirname })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
