let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// let mycDate = new Date(2024, 0, 9); //months start from 0 as it is for JAN

let mycDate = new Date("2024-01-15");  //in this format month start from 1
console.log(mycDate.toDateString());