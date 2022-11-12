let a = [1, 2, 3, 4, 5, 6];

// map(value, index ,array)
let b = a.map((value, index, arr) => {
    console.log(value, index, arr)
    return value + index
})
console.log("\n" + b + "\n")

// filter method
let c = b.filter((item) => {
    return item >= 5;
})
console.log(c + "\n")

// reduce method
let d = a.reduce((a, b) => {
    return a + b;
})
console.log(d + "\n")


// another way
const sub = (h1, h2)=>{
    return h1 - h2
}
let e = a.reduce(sub)
console.log(e)