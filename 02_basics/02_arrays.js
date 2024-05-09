const marvel_heroes = ["Thor", "Hulk", "Iron-Man"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes)

// const all_heroes = marvel_heroes.concat(dc_heroes)

// console.log(all_heroes);

const all_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_heroes);

const myNewArray = [1,2,3,4,[5,6,[7,8]],9,10,[11]]

const myRealArray = myNewArray.flat(Infinity)

console.log(myRealArray);