function fun(){
    return "hello world"
}
console.log(fun())

const fun2 = ()=>{
    return "New world"
}
console.log(fun2())



let marks = {
    mahesh : 89,
    sid : 100, 
    saurabh: 80
}
console.log(Object.keys(marks))
console.log(Object.keys(marks).length)
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of "+ Object.keys(marks)[i] +    " Are "+ marks[Object.keys(marks)[i]])
}

for (i in marks){
    console.log(marks[i])
}