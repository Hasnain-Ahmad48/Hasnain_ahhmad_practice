console.log("hello");

// 1) swapNumbersUsingThirdVariable
// 2) swapNumbersWithOutVariable
// 3) fibonacciSeries
// 4) sumOfNumber  --> 2456 = 2+4+5+6 = 17
// 5) armstrongNumber
// 6) isPerfectNumber
// 7) performStringReverse
// 8) performNumberReverse
// 9) checkPalindrome
// 10) Print all prime numbers from 1 to 100

let firstNo = 10;
let secondNo = 20;
console.log("firstNo:", firstNo, "second no:", secondNo);
let temp;
temp = firstNo;
firstNo = secondNo;
secondNo = temp;
console.log("after swap frist no:", firstNo);
console.log("after swap second no:", secondNo);

//swapNmber

let a = 12;
let b = 15;
console.log("a: ", a, "b: ", b);
a = a + b;
b = a - b;
a = a - b;
console.log("a: ", a, "b: ", b);

//fibonacciSeries

let number = prompt("Enter number");
let n1 = 0;
let n2 = 1;
let n3;

for (let i = 0; i <= number; i++) {
  console.log(n1+ " ");
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
