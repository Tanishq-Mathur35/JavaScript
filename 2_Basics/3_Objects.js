// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    "full name": "JavaScript User",
    age: 25,
    [mySym]: "myKey1",
    location: "USA",
    email: "hello@ac.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
