// console.log("Hello");

const data = [
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]

// const name1 = data[0].name;
// console.log("Name :", name1);

// const category1 = data[0].category;
// console.log("Category :", category1);

// const price = data[0].price;
// console.log("Price :", price);

//To print all values of data
// for (let i = 0; i< data.length; i++) {
//     const name1 = data[i].name;
//     console.log("Name :", name1);

//     const category1 = data[i].category;
//     console.log("Category", category1);

//     const price1 = data[i].price;
//     console.log("Price", price1);

//     console.log("------------------------");
// }

// Print all data in one line

// for (let i = 0; i< data.length; i++) {
//     const name1 = data[i].name;
//     // console.log("Name :", name1);

//     const category1 = data[i].category;
//     // console.log("Category", category1);

//     const price1 = data[i].price;
//     console.log(name1, category1, price1);

//     console.log("------------------------");
// }

//select element;
//make variable with data;
//assign variable to element

// // print value in html page
// const element = document.getElementById("container");
// for (let i = 0; i< data.length; i++) {
//     const name1 = data[i].name;

//     const category1 = data[i].category;

//     const price1 = data[i].price;

//     const htmlData = `<div 
//     class="card">
//       <h1>${name1}</h1>
//       <h2>${category1}</h2>
//       <h2>${price1}</h2>
//     </div>`;


//     element.innerHTML += htmlData;
// }

//  ------- Functions---------
// function sum(a,b) {
//     let sum = a + b;
//     console.log(sum);
// }
// sum(3, 5);

//Types of Fxn: preBuild, userDefined
//UserDefined Fxn : named fxn, arrow fxn, iffi fxn

//Named fxn: declared funtion by person
function sum(a,b) {
    const sum = a+b;
    return sum;
}

// const sumOfNo = sum(3,6);
// const sumOfNo2 = sum(54,7);
// console.log(sumOfNo, sumOfNo2);

//Arrow fxn : used arrow in this
const sub = (a,b) => {
    const ans = a - b;
    return ans;
};

// Iffi Fxn: call without name and run only one time
(function() {
    console.log("Hello Hello");
})();