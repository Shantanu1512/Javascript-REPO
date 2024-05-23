const arr = [1,2,3]

// let newNums = arr.reduce(function (acc,cur){
//     console.log(`cur: ${cur} acc : ${acc}`);
//     return acc - cur
// }, 0)

// console.log(newNums);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let total = shoppingCart.reduce( (acc, price) => acc + price.price,0)

console.log((total));