// const newUser = new Object()

const tinderUser = {}

tinderUser.name = "Shantanu",
tinderUser.age = 24,
tinderUser.address = "Kolhapur"
// console.log(tinderUser)

//Object inside Object

const newUser = {
    email:"more@gmail",
    fullName: {
        firstName:{
            actual:"Shantanu",
            casual:"Shantanu2"
        },
        lastName:"More"
    }
}

// console.log(newUser.fullName.firstName.casual)
// console.log(newUser.fullName)

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2) // here {} will be target and others are source

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // array mdhe key val cha array krun data detay

const course = {
    name:"JS",
    price: 2000,
    author:"JS Master"
}

// course.author

const {author} = course

console.log(author)