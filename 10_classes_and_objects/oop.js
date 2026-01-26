const user = {
    username: "tanishq",
    loginCount: 25,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this)  // global object / window object 




function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.gerrting = function () {
        console.log(`Welcome back, ${this.username}`);
    }

    return this;
}

const User1 = new User("tanishq", 25, true);
const User2 = new User("john_doe", 10, false);
console.log(User1.constructor);
console.log(User2);




/* New Keyword :
1. Creates an empty object {}
2. Sets the value of 'this' to the newly created object
3. Implicitly returns 'this' from the function
*/
