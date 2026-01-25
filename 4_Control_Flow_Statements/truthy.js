const userEmail = "tanishq@com"

if (userEmail) {
    console.log("Got User email");
} else {
    console.log("Don't have user email");
}


// Falsy Values in JavaScript
/*1. false
2. 0
3. "" (empty string)
4. null
5. undefined
6. NaN (Not a Number)
7. BigInt 0n
*/

// Truthy Values in JavaScript
/*1. true
2. Non-zero numbers (e.g., 1, -1, 3.14)
3. Non-empty strings (e.g., "hello", "0", "false")
4. Objects (e.g., {}, [])
5. Functions
6. BigInt non-zero values (e.g., 1n, -1n)
7. Symbols
*/


const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}



// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);



// Ternary Operator

const age = 17;
const canVote = (age >= 18) ? "Can Vote" : "Cannot Vote";
console.log(canVote);
