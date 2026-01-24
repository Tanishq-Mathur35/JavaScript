// Immediately Invoked Function Expressions (IIFE) : These are functions that are executed right after they are defined.



// function hello() {
//     console.log("Hello I am Tanishq");
// }
// hello();  // Normal function invocation



(function helloIIFE() {  // it is named IIFE
    console.log("Hello I am Tanishq from IIFE");
})();  // IIFE invocation : executed right after definition because of the () at the end


((name) => {   // it is not named IIFE
    console.log(`Hello from ${name} by IIFE Arrow Function`);
})("Tanishq");

