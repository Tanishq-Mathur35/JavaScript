// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc@`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}



const hello = new User("hello", "hello@google.com", "1234")
console.log(hello.encryptPassword());
console.log(hello.changeUsername());
