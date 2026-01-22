// There are 7 primitive data types in JavaScript:

// 1. Number
let num = 42;
console.log("Number:", num);
console.log("Type of num:", typeof num);
console.log("-----------------------\n");

// 2. String
let str = "Hello, JavaScript!";
console.log("String:", str);
console.log("Type of str:", typeof str);
console.log("-----------------------\n");

// 3. Boolean
let bool = true;
console.log("Boolean:", bool);
console.log("Type of bool:", typeof bool);
console.log("-----------------------\n");

// 4. Undefined
let undef;
console.log("Undefined:", undef);
console.log("Type of undef:", typeof undef);
console.log("-----------------------\n");

// 5. Null
let nul = null;
console.log("Null:", nul);
console.log("Type of nul:", typeof nul); // Note: this will return 'object' due to a historical bug in JavaScript
console.log("-----------------------\n");

// 6. Symbol
let sym = Symbol("unique");
console.log("Symbol:", sym);
console.log("Type of sym:", typeof sym);
console.log("-----------------------\n");

// 7. BigInt
let bigIntNum = 9007199254740991n;
console.log("BigInt:", bigIntNum);
console.log("Type of bigIntNum:", typeof bigIntNum);
console.log("-----------------------\n");


// Summary Table
console.table({
    Number: typeof num,
    String: typeof str,
    Boolean: typeof bool,
    Undefined: typeof undef,
    Null: typeof nul,
    Symbol: typeof sym,
    BigInt: typeof bigIntNum
});
