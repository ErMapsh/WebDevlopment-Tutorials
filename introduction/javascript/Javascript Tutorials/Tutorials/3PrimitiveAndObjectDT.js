console.log("---Primitive Datatype and Object Datatype---")

/*  
    primitive data type are those datatype that provide programming language: 
    1.N -> null
    2.N -> number
    3.S -> string
    4.S -> symbol
    5.B -> boolean
    6.B -> bigint
    7.U -> undefined
*/

let a = null;
let b = 8;
let c = true;
let d = BigInt("567")
let e = "ErMapsh"
let f = Symbol("I am nice symbol")
let g = undefined
let h // its also undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof(d))


/*
    object is non primitve datatype in js

*/

// its look like dict but in js we called it object
const  item = {
    "Name": "Mapsh",
    "Data": undefined,
    "Age" : 22
}

console.log(item["Name"])