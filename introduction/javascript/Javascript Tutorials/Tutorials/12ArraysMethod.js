let marks = [1, 2, 3, 4, 5, false];

// array into String
let b = marks.toString()
console.log(b, typeof b)

// join method joins every element with specifier para
let c = marks.join("_")
console.log(c, typeof c)

// pop
marks.pop()
console.log(marks)

// push
marks.push("fcuk")
console.log(marks)

// remove the element from the start of the array
let r = marks.shift()
console.log(r, marks)

// add  the element from the start of the array
let s = marks.unshift(100)
console.log(s, marks) // s is length of marks

// delete 
delete marks[0];
console.log(marks)
marks[0] = 1
console.log(marks)

// concat
let moreNum = [8, 73, 3, 23, 344];
let newArray = marks.concat(moreNum)
console.log(newArray)
console.log(newArray.length)

// sort 
moreNum.sort()
console.log(moreNum)

// for descending
let compare = (a, b)=>{
    return b-a;
}
moreNum.sort(compare)
console.log(moreNum)

// reverse
console.log(moreNum.reverse())

// slice having 4 para ---> (from index, how much element should remove , elements that u wnat)
let na = [1, 2, 3, 4, 5, 6, 7, 8]
let newka = na.slice(2, 4)
console.log(newka)