let a = 10
const b = 20

console.log(`Global Scope: a = ${a}, b = ${b}`); // Accessible everywhere

if (true) {
    let a = 40;
    const b = 50;
    console.log(`Block Scope: a = ${a}, b = ${b}`); // a and b are block-scoped
}

console.log(`Global Scope after block: a = ${a}, b = ${b}`); // a and b are global-scoped



function one() {
    const username = "tanishq mathur";
    function two() {
        const website = "tanishqmathur.com";
        console.log(username); // Accessible due to lexical scoping
    }
    // console.log(website); // Error: website is not defined

    two();
}
// one();


if (true) {
    const username = "Tanishq Mathur";
    if (username === "Tanishq Mathur") {
        const website = "tanishqmathur.com";
        // console.log(username + " " + website);
    }
    // console.log(website);  this will throw an error as website is not defined in this scope
}
// console.log(username);   this will throw an error as username is not defined in this scope




console.log(addOne(5));  // This works due to function hoisting
function addOne(num) {
    return num + 1;
}


// addTwo(5);   // This will throw an error: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2;
}
