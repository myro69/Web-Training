// let arr=[1,2,3,4,5,"Hello", true];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.push("ram");

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.pop();

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//splice
// arr.splice(2, 1, 7);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.splice(start, count, addOn);

// arr1 = [1,3,4,5,2,6,8,7,9,98];
// arr1.splice(3,0,6);
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// //count number of 5 in this array
// arrnew = [5,5,6,4,3,5,4,56,4,3];
// let count = 0;
// for (let i = 0; i < arrnew.length; i++) {
//     console.log(arrnew[i]);
//     if (arrnew[i] === 5) {
//         count++;
//     }
// }
// console.log(count);

// // check no. of even number
// arrnew = [5,5,6,4,3,5,4,56,4,3];22
// let count = 0;
// for (let i = 0; i < arrnew.length; i++) {
//     if (arrnew[i] % 2 === 0) {
//         count++;
//     }
// }
// console.log(count);


// // Q. remove 5 from the array
// arr1 = [1,4,5,6,73,2,4];
// arr1.splice(2, 1);
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// // Q. add one in each element
// arr2 = [1,3,45,6,2,2];
// arr2.splice(0, 6, [2,3,46,7,3,3]);
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }

// Q. find missing number in an array range : [1 to n] only one no. is missing . eg. input : [1,2,3,4,5,7,8,9] : ans = 6
// arr3 = [1,2,3,4,5,7,8,9];
// let sum = 0;
// for (let i = 0; i < arr3.length; i++) {
//     sum = sum + arr3[i];
//     if (sum % 2 === 0) {
//         console.log(sum);
//         break;
//     }
// }

// Q. largest element and smallest number in an array : eg. [3,5,1,5,7,5,2,9,3] ans: largest 9 and smllest 1

// Q. print sum of odd and even digits
// arrnew = [5,5,6,4,3,5,4,56,4,3];
// // even number sum
// let sum = 0;
// for (let i = 0; i < arrnew.length; i++) {
//     if (arrnew[i] % 2 === 0) {
//         sum = sum + arrnew[i];
//     }
// }
// console.log(sum);

// // odd number sum
// let sum1 = 0;
// for (let i = 0; i < arrnew.length; i++) {
//     if (arrnew[i] % 2 != 0) {
//         sum1 = sum1 + arrnew[i];
//     }
// }
// console.log(sum1);

let student_id_card = {
    // key : value
    name: "Ram",
    rollnumber: 45365,
    section: "B",
    course: "B.Tech",
    branch: "CSE",
    address: "Delhi",
};
// to print value one by one
const address = student_id_card.address;
const course = student_id_card.course;
console.log(course, address);

// added key value by this
student_id_card.result = "Pass";
console.log(student_id_card);
