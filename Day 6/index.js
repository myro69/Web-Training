console.log("......Welcome in js......");

// variables: var, let, const

document.write("Hello World"); // to print in page

let a = 5;
console.log(a);
var b=5;
console.log(b);
const c = 10; //const is not changable
console.log(c);
a=9;
b=6;
a="abc";
console.log(a);

if (a===5) {
    console.log("hello world if condition");
} else {
    console.log("else condition");
}
console.log("for loop output:-");
for (let i=0; i<10; i++) {
    console.log(i);
}

// table print
console.log("Q1. Table");
// const n = parseInt(prompt('Enter an integer: '));
let n = 5;
for (let i = 1; i <= 10; ++i) {
    console.log(n + " * " + i + " = " + n * i);
}

// print all numbers : which div by 3
console.log("Q2. Numbers : which div by 3");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// print all numbers : which is div by 3 and 5
console.log("Q3. Numbers : which div by 3 and 5");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0)
        if (i % 5 === 0) {
        console.log(i);
    }
}

// print all numbers : which is div by 3 and 5 or 9
console.log("Q4. Numbers : which div by 3 and 5 or 9");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0)
        if (i % 5 === 0 || i % 9 === 0) {
        console.log(i);
    }
}

// // print even and odd number
console.log("Q5. Print even and odd number");
for (let i = 1; i <=10; i=i+1) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
for (let i = 1; i <=10; i=i+2) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


// While loop
console.log("---While Loop---");
let i=0;
while (i < 10) {
    console.log(i);
    i=i+4;
}

// while even number question 
console.log("---While Loop / Even number question---");
let f = 0;
while (f < 31) {
    console.log(f);
    f=f+2;
}

// print: [-] at position : div by 3
console.log("Q. [-] at position : div by 3");
let m = 0;
while (m < 30) {
    if (m % 3 === 0){
        console.log("-"+m);
    }
    m++;
}


// // print: number in reverse order : [n to 0]
console.log("Q. Number in reverse order");
h = 15;
for (let i = h; 0 < i; i--) {
    console.log(i); 
  }


// print sum of all even numbers
console.log("Q. Sum of even numbers");
let x = 0;
let sumeven = 0;
while (x < 100) {
    x++;
    if (x % 2 === 0) {
        sumeven = x + sumeven;
    }
}
console.log(sumeven);


// print no of digits in number N : eg : N=3445 : ans 4
console.log("Q. no of digits in number N : eg : N=3445 : ans 4");
let count = 0;
let N = 34626;
while (N > 0) {
    N = Math.floor(N/10);
    count++;
}
console.log(count);

// print no after replacing 5 to 9 : eg : no=1526 : ans 1926
console.log("Q. print no after replacing 5 to 9 : eg : no=1526 : ans 1926");
let k = 1547;
let numString = k.toString();
let result = numString.replace(/5/g, '9');
console.log(result);