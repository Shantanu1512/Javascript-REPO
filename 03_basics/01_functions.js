
function myName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("U");

}

// myName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(3, 4)

// console.log(result);

function loggedUser(username = "Kunal"){
    return `${username} is logged in!!`
}

// console.log(loggedUser("Shantanu"));

function calculateNums(val1, val2, ...num1){
    let arr = [val1, ...num1, val2]
    return arr 
}

let arr = calculateNums(2, 3, 5, 4)
// console.log(typeof arr);


//passing object as parameter

let user = {
    name: "Shantanu",
    age: 24
}

function userDetails(anyObject){
    // console.log(`Name is ${anyObject.name} and age is ${anyObject.age}`);
}

// userDetails(user)
userDetails({
    name:"Rahul",
    age: 24
})

const arr1 = [1, 2, 3, 5 ,4]

function myArr(getArr){
    return getArr
}
console.log(myArr(arr1));