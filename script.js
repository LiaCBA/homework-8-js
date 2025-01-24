"use strict";

// task 1 , გავაკეთე function, რომელსაც ორი არგუმენტი აქცს (num1 და num2) და პასუხად 12 უნდა მოგვცეს.
// ამის გამო, დავწერე console.log(sum(5, 7)); აქ ციფრებმა ჩაანაცვლა num 1 და  num2
// ერთმანეთის დამატებისთვის დავწერე let sumNumber = num1 + num2
// return აბრუნებს sumNumber-ის მნიშვნელობას, რომელიც არის რიცხვის ჯამი. console.log-ი კი სატესტოდ არის, რომელიც ლოგავს (sum(5, 7))

// function sum(num1, num2) {
//   let sumNumber = num1 + num2;
//   return sumNumber;
// }

// console.log(sum(5, 7));

// task 2 , ისევ გავაკეთე function, რომელსაც ორი არგუმენტი აქვს (num1 და num2) და ისინი უნდა შევადაროთ ერთმანეთს.
// if else და return-ის დახმარებით, თუ num1 მეტია num2-ზე, მაშინ ტექსტი დაგვიბრუნდება "num1 is greater than num2"
// თუ num2 მეტია, მაშინ დაგვიწერს რომ num1 ნაკლებია num2-ზე და თუ ორივე ტოლია, მაშინ გვეტყის რომ num1 და num2 ტოლია.
// აქაც როგორც პირველ დავალებაში გამოვიყენე console.log სატესტოდ, სადაც ციფრები დავწერე რომ num1 და num2 ჩაანაცვლოს

// function compareNumbers(num1, num2) {
//   if (num1 > num2) {
//     return `${num1} is greater than ${num2}`;
//   } else if (num1 < num2) {
//     return `${num1} is less than ${num2}`;
//   } else {
//     return `${num1} is equal to ${num2}`;
//   }
// }

// console.log(compareNumbers(10, 5)); // Output: 10 is greater than 5
// console.log(compareNumbers(3, 8)); // Output: 3 is less than 8
// console.log(compareNumbers(4, 4)); // Output: 4 is equal to 4

// task 3

// function findGade(score) {
//   if (score >= 90 && score <= 100) return "A";
//   else if (score >= 80 && score <= 89) {
//     return "B";
//   } else if (score >= 70 && score <= 79) {
//     return "C";
//   } else if (score >= 60 && score <= 69) {
//     return "D";
//   } else if (score < 60) {
//     return "F";
//   }
// }

// console.log(findGade(92));
// console.log(findGade(84));
// console.log(findGade(78));
// console.log(findGade(60));
// console.log(findGade(50));

//  task 4

// function checkTemperature(temperature) {
//   if (temperature < 0) {
//     return "Freezing";
//   } else if (temperature >= 0 && temperature <= 20) {
//     return "Cold";
//   } else if (temperature >= 21 && temperature <= 30) {
//     return "Warm";
//   } else if (temperature > 30) {
//     return "Hot";
//   }
// }

// console.log(checkTemperature(-5));
// console.log(checkTemperature(19));
// console.log(checkTemperature(21));
// console.log(checkTemperature(50));

//  task 5

// function greetUser(name) {
//   if (name) {
//     alert(`Hello, ${name}!`);
//   } else {
//     alert("Hello!");
//   }
// }

// const question = prompt("What is your name?");
// greetUser(question);

// task 6

function proceedAction(proceed) {
  const isConfirm = confirm("Do you want to proceed?");
  if (isConfirm) {
    return "Action has been succesful";
  } else {
    return "Action has been cancelled";
  }
}

console.log(proceedAction());
