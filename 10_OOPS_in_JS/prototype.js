// let myName = "Tanishq     ";
// let myChannel = "Mathur      "

// console.log(myName.truelength);



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.tanishq = function () {
    console.log(`Tanishq is present in all objects.`)
}


Array.prototype.heyTanishq = function () {
    console.log(`Tanishq says Hello`);

}


// heroPower.tanishq();
myHeros.tanishq();
myHeros.heyTanishq();
// heroPower.heyTanishq();




// Inheritance

const User = {
    name: "hello",
    email: "hello@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "   TanishqMathur    "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"HelloWorld".trueLength();
"JavaScript".trueLength();
