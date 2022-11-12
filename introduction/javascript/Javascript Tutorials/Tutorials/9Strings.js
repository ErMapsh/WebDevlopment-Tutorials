let s1 = "This is string"
let s2 = 'this is string using single quotes'

console.log("Lenght of string is", s1.length)
console.log("Lenght of string is", s2.length)
console.log("lowercase:", s2.toLowerCase())
console.log("UpperCase:", s2.toUpperCase())

// indexing in string
console.log(s1[0])

// string interpolation
let n1 = "mahesh";
let n2 = "ermapsh";
console.log(`boy first name is ${n1} and second boy name is ${n2}`)

// escape sequence character
// let fruit = "Ba'na'na" // just we cant 
let fruit = "Ba\'na\'na"
console.log(fruit)
console.log("Mahesh\nMestri")
console.log("Carriage Return : Mahesh\rMestri")// its override first no of char at start, cursor will come after \r at the begining and return this // Mestrige Return : Mahesh