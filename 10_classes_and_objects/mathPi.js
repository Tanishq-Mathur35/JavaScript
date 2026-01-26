const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const hello = {
    name: 'hello world',
    price: 250,
    isAvailable: true,

    sayHello: function () {
        console.log("Hello to world");
    }
}

console.log(Object.getOwnPropertyDescriptor(hello, "name"));

Object.defineProperty(hello, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(hello, "name"));


for (let [key, value] of Object.entries(hello)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
