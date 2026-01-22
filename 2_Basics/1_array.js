const myArray = [10, 20, 30, 40, 50];
console.log("My Array:", myArray);

const heros = ["Superman", "Batman", "Ironman", "Spiderman"];

const myArray2 = new Array(1, 2, 3, 4, 5);


// Array Methods
console.log("Original Array:", myArray2);

// Push - adds an element to the end
myArray2.push(6);
console.log("After Push:", myArray2);

// Pop - removes the last element
const poppedElement = myArray2.pop();
console.log("After Pop:", myArray2);
console.log("Popped Element:", poppedElement);

// Shift - removes the first element
const shiftedElement = myArray2.shift();
console.log("After Shift:", myArray2);
console.log("Shifted Element:", shiftedElement);

// Unshift - adds an element to the beginning
myArray2.unshift(0);
console.log("After Unshift:", myArray2);

// IndexOf - finds the index of an element
const index = myArray2.indexOf(3);
console.log("Index of 3:", index);

// includes - checks if an element is in the array
const hasFour = myArray2.includes(4);
console.log("Array includes 4:", hasFour);

const newArr = myArray2.join()

console.log(myArray2);
console.log(typeof newArr);


// Slice , Splice
const sliceArr = myArray2.slice(1, 4);
console.log("Sliced Array (1,4):", sliceArr);

const spliceArr = myArray2.splice(1, 2);
console.log("Spliced Array (1,2):", spliceArr);
console.log("Array after Splice:", myArray2);
