
const mySymb = Symbol("Key1")

const Jsuser = {
    name:"Shantanu",
    age: 24,
    isLoggedIn: false,
    "Email id": "more@gmail.com",
    logDays: ["Mon","Fri"],
    [mySymb]: "Key"
}

// console.log(Jsuser.name)
// console.log(Jsuser["isLoggedIn"])
// console.log(Jsuser["Email id"])

// console.log(Jsuser)
// Jsuser["Email id"] = "more@virtusa"
// console.log(Jsuser)
// Object.freeze(Jsuser)
// Jsuser["Email id"] = "more@bmi"
// console.log(Jsuser)

Jsuser.greeting= function(){
    console.log("Hello js user")
}
console.log(Jsuser.greeting())

Jsuser.greetByName = function(){
    console.log(`Hello ${this.name}, how are you`)
}
console.log(Jsuser.greetByName())