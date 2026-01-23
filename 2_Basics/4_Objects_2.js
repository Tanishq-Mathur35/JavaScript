const tinderUser = new Object();

tinderUser.id = "12abc";
tinderUser.name = "Tanishq";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "someemail@example.com",
    fullname: {
        userFullname: {
            firstName: "Tanishq",
            lastName: "Mathur"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);



const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = {obj1, obj2};   // This will not work as expected

// const obj3 = Object.assign({}, obj1, obj2, obj4);


const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "user1@example.com"
    },
    {
        id: 2,
        email: "user2@example.com"
    },
    {
        id: 3,
        email: "user3@example.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Tanishq Mathur"
}

// course.courseInstructor = "New Instructor";

const { courseInstructor: Instructor } = course

console.log(Instructor);



// {
//     "name": "Tanishq",
//     "courseName" : "JavaScript",
//     "price": "free"
// }


[
    {},
    {},
    {}
]