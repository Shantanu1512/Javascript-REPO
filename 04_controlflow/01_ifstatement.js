
const isLoggedIn = true
const debtCard = true
let isLoggedFromGoogle = false
let isLoggedFromGmail = true

if(isLoggedIn && debtCard){
    console.log("You can do shopping");
}

if(isLoggedFromGmail || isLoggedFromGoogle){
    console.log("Your email is correct");
}