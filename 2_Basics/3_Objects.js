// singleton
// Object.create

// object literals

const mySym = Symbol("Key1");

const JsUser = {
    name: "Tanishq",
    "full name": "Tanishq Mathur",
    [mySym]: "MyKey1",
    age: 19,
    location: "India",
    email: "tanishq@example.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "newemail@example.com";
// Object.freeze(JsUser);
JsUser.email = "anotheremail@example.com"; // It will not work bcoz object is frozen

// console.log(JsUser);


// Fucntion in Objects

JsUser.greetUser = function () {
    console.log("Hello JsUser");
}

JsUser.greetUserTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}


console.log(JsUser.greetUserTwo());
console.log(JsUser.greetUser());
