console.log("this line print using external link js");

function greeting(name, time= "Take care.."){
    console.log(`${time} ${name}`);
}

let time = 'Good Morning';
let name = 'Mahesh';
let name2 = 'Manthan';
let name3 = 'Adity';
let name4 = 'Harshada';

greeting(name, time);
greeting(name2, time);
greeting(name3); //when u not pass argument in function, if in function argument defined already when get argument defination to print
greeting(name4, time);
greeting("ErMapsh", "Good night");


//return value using function
function add(a, b, c){
    let sum = a+b+c;
    return sum;
}

returnval = add(1,3,4);
console.log(returnval);


// assignment on JS
console.log('...............ASSIGNMENT ON JS..............')
function no(no1, no2){
    if (no1>no2){
        console.log(`${no1} is greater than ${no2}`);
    }
    else{
        console.log(`${no1} is less than ${no2}`);
    }

}

no(121,34);