// let number = "9ab"

// console.log(typeof(number))
// console.log(typeof number)

// let num = Number(number)

// console.log(typeof num)
// console.log(num)
/* 
    in this case if you convert 9ab to number it will, but output will be NaN
    in this case if you convert null to number it will, but output will be 0 as it convert null to 0
    in this case if you convert undefined to number it will, but output will be NaN
    in this case if you convert true to number it will, but output will be 1
    in this case if you convert false to number it will, but output will be 0
    ===================================================================================================
    in this case if you convert string with pure numbers to number it will
*/

//=================================Operations===============================================

let numer = 9

let negNum = -numer
// console.log(negNum)

let str1 = "Hello"
let str2 = " Shantanu"
let str3 = str1+str2

// console.log(str3)

console.log(1 + "2")
console.log("1" + "2")
console.log("1" + 2)
console.log(1 + 2 + "3")
console.log("1" + 2 + 3)

/*
in above cases if we have two operands and one of them is string then it will consier as string concat
and for 3 operands if 1st is string then string concat or else addition and then string concat.
*/

