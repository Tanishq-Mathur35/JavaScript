function SetUsername(username) {
    // complex DB calls
    this.username = username
    console.log("called")
}


function createUser(username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const hello = new createUser("Hello", "hello@google.com", "1234")
console.log(hello);
