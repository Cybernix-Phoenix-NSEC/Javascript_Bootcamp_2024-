//var variable
// function myFunction() {
//   var message = "Hello from inside the function!";
//   console.log(message); // Output: Hello from inside the function!

//   if (true) {
//     var message = "Hello from inside the block!";
//     console.log(message); // Output: Hello from inside the block!
//   }

//   console.log(message); // Output: Hello from inside the block!
// }

// myFunction();

// console.log(message); // Output: Hello from inside the block!

// ----------------------------------------------------------------

//let variable
// function myFunction() {
//   let message = "Hello from inside the function!";
//   console.log(message); // Output: Hello from inside the function!

//   if (true) {
//     let message = "Hello from inside the block!";
//     console.log(message); // Output: Hello from inside the block!
//   }

//   console.log(message); // Output: Hello from inside the function!
// }

// myFunction();

// console.log(message); // ReferenceError: message is not defined

// console.log(y);
// let y = 5;
// console.log(y);

// alert("hello everyone!");

console.log("hello world");
console.log(24);

let age = 24;
if (age >= 18) {
  //false
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

for (i = 1; i <= 10; i++) {
  console.log(i);
}

let num = 2;
while (num <= 10) {
  console.log(num);
  num++;
}
//----------------------------------------------------------------

let input = 1;
do {
  console.log(input);
  input++;
} while (input <= 5); //false

let arr = [1, 8, 12, 9, 21];
arr.push(25);
console.log(arr);

function greet(name) {
  console.log("hello " + name + "!");
}
greet("John");

function mult(x, y) {
  const result = x * y;
  return result;
}

const roomarea = mult(2, 7);
console.log(roomarea);

const nsec = {
  name: "Rahul",
  sec: "A",
};

console.log(nsec.name);
console.log(nsec.sec);

let array = ["apple", "banana", "orange"];

for (const arr of array) {
  console.log(arr);
}

for (const index in array) {
  console.log(index);
}
//map
// const numbers = [1, 2, 3, 4];

// // Double each number
// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8]

// // Convert an array of strings to uppercase
// const names = ["Alice", "bob", "Charlie"];
// const uppercaseNames = names.map(name => name.toUpperCase());
// console.log(uppercaseNames); // Output: ["ALICE", "BOB", "CHARLIE"]

//array filter
const numbers = [5, 12, 3, 8, 15];

// Find even numbers:
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [12, 8]

// Filtering objects in an array
// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Tablet", price: 350 },
//   { name: "Phone", price: 600 },
// ];

// const affordableProducts = products.filter((product) => product.price < 500);
// console.log(affordableProducts);
// Output: [{ name: "Tablet", price: 350 }];

// document.getElementById("heading").innerHTML = "Hello";

//reduce
// const numbers = [2, 5, 8];

// // Sum of all numbers
// const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0); // Note: 0 is the initial value of the accumulator
// console.log(sum); // Output: 15

// // Find the maximum number
// const maxNumber = numbers.reduce((accumulator, currentNumber) => {
//   return Math.max(accumulator, currentNumber);
// }, -Infinity);
// console.log(maxNumber); // Output: 8

// const btn_ele = document.getElementsByClassName("btn")[0];
// const para = document.getElementsByTagName("p")[0];
// let flag = false;

// btn_ele.addEventListener("click", () => {
//   if (flag) {
//     para.style.display = "inline-block";
//     flag = false;
//   } else {
//     para.style.display = "none";
//     flag = true;
//   }
// });

// async function clicked(e) {
//   const button = document.querySelector("button");
//   const paragraph = document.querySelector("p");
//   temp = false;
//   button.addEventListener("click", () => {
//     if (temp) {
//       paragraph.style.display = "inline-block";
//       temp = false;
//     } else {
//       paragraph.style.display = "none";
//       temp = true;
//     }
//   });
//   console.log("Button clicked!", e);
// }

// const button = document.getElementById("myButton");
// const paragraph = document.getElementById("changeableText");

// function changeText() {
//   paragraph.textContent = "The text has been changed!";
// }

// button.addEventListener("click", changeText);

//different events in js
// onchange:	An HTML element has been changed
// onclick:	    The user clicks an HTML element
// onmouseover:	The user moves the mouse over an HTML element
// onmouseout:	The user moves the mouse away from an HTML element
// onkeydown:	The user pushes a keyboard key
// onload:	    The browser has finished loading the page

console.log("Synchronous Task 1: Starting");
const result = 10 + 20;
console.log("Synchronous Task 1: Finished. Result:", result);

console.log("Asynchronous Task 2: Starting");

// Simulate a delayed operation like a network request
setTimeout(function () {
  console.log("Asynchronous Task 2: Finished after delay");
}, 3000); // 3 second delay

console.log("Synchronous Task 3: Starting");
console.log("Synchronous Task 3: Finished");

//async/await
// async function displayData() {
//     try {
//       const data = await getData();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

function getfibonacci(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

getfibonacci(function () {
  console.log("fibonacci");
});

function operation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("success");
      } else {
        reject("operation failed");
      }
    }, 2000);
  });
}

operation()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

function fetchdata(callback) {
  console.log("do something task 1");

  callback();

  console.log("do something task 2");
}

function callfunction() {
  console.log("do something task 3");
}

fetchdata(callfunction);
