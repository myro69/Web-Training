// function sum(a,b) {
//     const sum = a + b;
//     console.log(sum);
// }
// sum(5,6);

//Topic : -----Event Listener-----
//task : increment the number on every click to sum 
const counter = document.getElementById("counter");

let count = 0;
function incrementValue() {
    count++;
    counter.innerText = count;
}

function decValue() {
    count--;
    counter.innerText = count;
}


// -------Imp Topic-------

//Try catch: to run the code even if the error in our code
const a = 5;
const b = 9;
console.log("value of a:",a);

try{
    a=6;
    console.log("value of a:", a);
}catch(error){
    console.log(error)
}

console.log("value of b:", b);

//Promise : pending, resolve and reject : when the error comes and trying to solve it then the output comes this
function myPromiseFun(res, rej) {
    //...code...
    let delay = 100000000;
    while (delay--);
    res("We are working on it")
}
const myPromise = new Promise(myPromiseFun);
console.log(myPromise);

// HW :-
// 1.setTimeout
// 2.setInterval