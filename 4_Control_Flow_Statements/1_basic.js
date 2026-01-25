// if

const isLoggedIn = true;
const temp = 41;


if (temp === 40) {
    console.log("Less than 50");
} else {
    // console.log("temperature is greater than 50");
}



// <, >, <=, >=, ==, !=, !==, ===   // Comparison Operators


// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);  // ReferenceError: power is not defined



// const balance = 1000;
// if (balance >= 500) console.log("Test"), console.log("Test 2");


// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");
// }



const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const LoggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {        // && -> AND Operator: this is true when both conditions are true
    console.log("Allow to buy Course")
}


if (loggedInFromGoogle || LoggedInFromEmail) {   // || -> OR Operator: this is true when any one condition is true
    console.log("User is logged in");
}
