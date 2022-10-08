//1.A program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzBuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//2.Star Pattern
let star = "*";
for (let i = 1; i <= 5; i++) {
  let out = star.repeat(i);
  console.log(out);
}
//3.A program to take a number input from user and print multiplication table 12 times for that number.
let input = prompt(
  "Enter the number for multiplication table 12 times for that number "
);
let out = input * 12;
if (out >= 0) {
  console.log("12 *", input, "=", out);
} else {
  console.log("Enter a Number");
}
//4.A program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21...
let n0 = 0;
n1 = 1;
let no = prompt("Enter a number to return a Fibonacci series ");
for (i = 0; i <= no; i++) {
  console.log(n0);
  n2 = n0 + n1;
  n0 = n1;
  n1 = n2;
}

//5.A program to take an input from a user and find its Factorial.
let n = prompt("Enter a number to find it's Factorial");
let res2 = 1;
if (n > 0) {
  for (i = 0; i < n; i++) {
    let j = n - i;
    let res = 1;
    let res1 = j * res;
    res2 = res1 * res2;
  }
  console.log("Factorial of", n, "is", res2);
} else {
  console.log("Enter a valid number");
}

//6.A Program to take a number input from user and find if the number is Prime or not.
let num = prompt("Enter a number to check whether it's a prime or not");
if (num > 3) {
  if (num != 5) {
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
      console.log(num, "is not a prime");
    }
  } else {
    console.log(num, "is  a prime");
  }
} else {
  console.log(num, "is  a prime");
}

//7.A program to take a day as an input and determine whether it is a weekday or weekend.
let day = prompt("Enter the name of a day");
switch (day) {
  case "monday":
    console.log(day, "is a weekday");
    break;
  case "tuesday":
    console.log(day, "is a weekday");
    break;
  case "wednesday":
    console.log(day, "is a weekday");
    break;
  case "thursday":
    console.log(day, "is a weekday");
    break;
  case "friday":
    console.log(day, "is a weekday");
    break;
  case "saturday":
    console.log(day, "is a weekend");
    break;
  case "sunday":
    console.log(day, "is a weekend");
    break;
    Default: console.log("Enter a correct day");
}
