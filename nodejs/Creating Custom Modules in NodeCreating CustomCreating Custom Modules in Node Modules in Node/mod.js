console.log('This is a custom module');
function avg(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element; 
    });
    return sum/arr.length;
}
 
// module.exports = avg;
module.exports = {
    avg: average,
    Name: "ErMapsh", 
    age: 21,
    repo: "git" 
};

