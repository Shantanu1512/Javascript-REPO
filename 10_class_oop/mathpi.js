console.log(Math.PI)

const prop = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(prop);


const User = {
    name: "Shantanu",
    age: 24
}

console.log(Object.getOwnPropertyDescriptor(User, "name"))

Object.defineProperty(User, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(User, "name"))
