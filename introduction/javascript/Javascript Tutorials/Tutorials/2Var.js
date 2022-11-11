console.log("Variables");
/*  
    1. why should not use var?
    Before ES6(ECMAScript 6) to define a variable we use var keyword. but due to var, bug will introduced. because var varibale can define again 
    var a = "ee";
    var a = 3; // its will no throw error
    
    2.why we should use const ?
    const value when first u define after cant change.
    and u we cant just initialize const value we need to declare value

    3. why we should use let?
    its like a var, but its will access in scope where is present. not from outside.

*/


var a = 34;
let b = "mahesh";
var c = null;
var d = undefined;

{   
    // let is scope var--> and his scope is limited to scope
    let b = "ErMapsh"
    console.log(b)
}

console.log(b)
