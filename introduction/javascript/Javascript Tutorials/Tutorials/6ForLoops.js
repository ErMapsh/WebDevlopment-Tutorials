
// tradition way for loop
for (let i = 0; i < 5; i++) {
    console.log(i)   
}
console.log("\n")

// for in 
let marks = {
    mahesh :30,
    adity :40,
    anant :53,
    chhaya :35,
}

for (let i in marks){
    console.log(marks[i])
}
console.log("\n")

let a =  [1, 2, 4, 5]
for(let j in a){
    console.log(a[j])
}
console.log("\n")

// for of
for(let k of a){
    console.log(k)
}