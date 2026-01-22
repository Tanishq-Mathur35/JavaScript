let score = true;
console.log(typeof score);

let valInNumber = Number(score);
console.log(typeof valInNumber);
console.log(valInNumber); // NaN (Not a Number)

/*Type Conversion Summary:
"33" => 33
true => 1
false => 0
"hello" => NaN
undefined => NaN
null => 0
*/
console.log("\n");

let isLoggedIn = "33456";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/* Summary of Boolean Conversion:
1 => true
0 => false
"" => false
" " => true
"0" => true
"hello" => true
*/
console.log("\n");
let someNumber = 123;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

console.log("\n");


// ------------------------Operations------------------------ 
let value = 3;
let negValue = -value;
console.log(negValue);


console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

console.log("\n");

let str1 = "Hello ";
let str2 = "World";
console.log(str1 + str2);

console.log("\n\n");

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");


console.log("\n");
console.log(+true);
console.log(+"");

console.log("\n");

let GameCounter = 100;
GameCounter++;
console.log(GameCounter);