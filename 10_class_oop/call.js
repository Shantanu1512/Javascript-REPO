 function setusername(usermame){
    this.usermame = usermame
}

function user (username, email, pass){
    setusername.call(this, username)

    this.email = email
    this.pass = pass
}

const sh = new user("Shantanu", "@email", "1234")
console.log(sh);