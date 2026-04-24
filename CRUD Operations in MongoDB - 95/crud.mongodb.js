use("CrudDb")

// CREATE DB
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Hasnain Malik",
//     age: 19,
//     assignment: 12,
//     projects: 3
// })
// INSERT IN DB
//  db.courses.insertMany([
//     {
//       "name": "Python Masterclass",
//       "price": 0,
//       "assignments": 10,
//       "projects": 30
//     },
//     {
//       "name": "JavaScript Basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 20
//     },
//     {
//       "name": "C# for Beginners",
//       "price": 0,
//       "assignments": 15,
//       "projects": 40
//     },
//     {
//       "name": "Web Development Fundamentals",
//       "price": 0,
//       "assignments": 12,
//       "projects": 35
//     },
//     {
//       "name": "Java Programming Essentials",
//       "price": 0,
//       "assignments": 14,
//       "projects": 38
//     },
//     {
//       "name": "ReactJS Crash Course",
//       "price": 0,
//       "assignments": 10,
//       "projects": 25
//     },
//     {
//       "name": "SQL Simplified",
//       "price": 0,
//       "assignments": 12,
//       "projects": 30
//     },
//     {
//       "name": "Responsive Web Design",
//       "price": 0,
//       "assignments": 10,
//       "projects": 28
//     },
//     {
//       "name": "Node.js for Beginners",
//       "price": 0,
//       "assignments": 13,
//       "projects": 36
//     },
//     {
//       "name": "Frontend Development with Vue.js",
//       "price": 0,
//       "assignments": 11,
//       "projects": 32
//     }
//   ]
//   )
  
// READ
//   let a = db.courses.find({"price": 0})

//   console.log(a.toArray());

//   let b = db.courses.findOne({"price": 0})

//   console.log(b);

  // UPDATE
//   db.courses.updateOne({price: 0}, {$set: {price: 100}})

//   db.courses.updateMany({price: 100}, {$set: {price: 1000}})

  //DELETE

//   db.courses.deleteOne({price: 1000})
  db.courses.deleteMany({price: 0})
  db.courses.deleteMany({age: 19})

  // https://www.mongodb.com/docs/manual/reference/operator/query/

  