class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}


const hello = new Teacher("hello", "hello@teacher.com", "123")
hello.logMe()

const world = new User("world")
world.logMe();


console.log(hello instanceof User);
