// let obj = {
//     a: 10,
//     b: "Hasnain"
// };
// console.log(obj);

// let animal = {
//     eat: true
// };
// let rabit = {
//     jump: true
// };
// rabit.__proto__ = animal; // sets rabits[[Prototype]] = animal



class Animal {
    constructor(name) {
        this.name = name;
        console.log("Object is created");
    }
    eats() {
        console.log("Kha rha hn");
    }
    jumps() {
        console.log("Kood rha hn");
    }
}

class lion extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
        console.log("Object is created and He is a lion")
    }


        eats() {
            super.eats()
            console.log("Kha rha hn roar");
        }
}

let a = new Animal("Dog");
console.log(a);

let l = new lion("shera");
console.log(l);