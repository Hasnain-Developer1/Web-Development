const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000
const Employee = require('./models/Employee');

app.set('view engine', 'ejs');

const getRandom = (arr) => {
  let rno = Math.floor(Math.random()*(arr.length-1))
  return arr[rno]
}

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' })
})

app.get('/generate', async (req, res) => {
  // Clear the collection Employee
  await Employee.deleteMany({});
  // Generate Random Data
  let randomNames = ["Hasnain", "Ali", "Ayyan", "Hussain"]
  let randomCities = ["Layyah", "Multan", "Karachi", "Lahore"]
  let randomLang = ["Python", "JavaScript", "Java", "C++"]
  try {
    for (let index = 0; index < 10; index++) {
      let e = await Employee.create({
        name: getRandom(randomNames),
        salary: Math.floor(Math.random() * 30000),
        language: getRandom(randomLang),
        city: getRandom(randomCities),
        isManager: (Math.random() > 0.5)?true:false})
      console.log(e);
    }
    res.json({ success: true, message: '10 records generated' })
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
