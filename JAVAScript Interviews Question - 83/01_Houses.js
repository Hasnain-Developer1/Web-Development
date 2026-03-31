let students = ["Hasnain", "Umair", "Ayyan", "Abu Bakkar", "Junaid", "Mateen", "Faizan", "Ali", "Ahmad", "Muneeb", "Sajid"]

let houses = []



for (const student of students) {
    if(student.length < 6)
        houses.push("Gryffinder")
    
    else if(houses.length < 8)
        houses.push("HufflePuff")
    
    else if(houses.length < 12)
        houses.push("RavenClaw")
    
    else
        houses.push("Slytherin")

}

console.log(houses)

