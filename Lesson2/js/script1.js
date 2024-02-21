// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

const message = "JavaScript is awesome!";

// Виведення

// alert(message);
// console.log(message);

// Отримання

// confirm

// const isConfirm = confirm("Please confirm reservation");
// console.log(isConfirm);

// const test = confirm("Yes or no?");
// console.log(test);

// prompt
// const userName = prompt("Please enter your name:");
// console.log(userName);

// let number = null;
// if (userName != null) {
//   number = prompt(`${userName}, please enter number`);
// } else  number = prompt("Please enter number");

// console.log(number);

// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt("Please enter a number!");
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// let value;

// ---String--- //

// value = false;
// console.log(typeof value);

// const newValue = String(value);
// console.log(typeof newValue);

// ---Number--- //
// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue); // number

// const test = Number("qwerty");
// console.log(test);
// console.log(typeof test);

// ---Boolean--- //

// Правила перетворення:
// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.
// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false

//Остача від ділення %

// console.log(8 % 3);
// console.log(10 % 3);
// console.log(10 % 2);

//Піднесення до степеня **

// console.log(5 ** 2); // 25
// console.log(4 ** 4); // 256

// // or -and -not //
// // ----------------------------------//
// // ----------------------------------//

// //   -----and (&&)------  //

// console.log(5 === 6 && 6 > 3); // false
// console.log(6 + 3 >= 9 && 8 + 1 === 9); // true

// //   -----or (||)------ //

// console.log(5 * 5 === 25 || 2 * 2 === 6); // true

// //   -----not (!) ------ //

// console.log(!false); // true

// Умови if/else
// ----------------------------------//
// ----------------------------------//
// if (5 * 5 === 25) {
//   console.log("1");
// } else {
//   console.log("2");
// }

/// ------Тернарний оператор------///
// умова ? якщо умова виконалась : якщо умова не виконалась
// 2 + 2 === 4 ? console.log("1") : console.log("2"); // 1
// 5 * 5 === 24 ? console.log(true) : console.log(false); // false

// ------ else if ------ //
//  if (5 + 5 === 10) { // якщо перша умова виконується, то інші не перевіряються
//     console.log("5+5 ===10");
//   } else if (2 + 2 === 4) { // перевіряється якщо перша умова не виконалась
//     console.log("2+2 ===4");
//   } else {
//     console.log("no"); // виконується якщо попередні були false
//   }

// ----------------------------------//
// switch/case
// ----------------------------------//

// let cost = null;
// const sub = "proo";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default: // ця частина не обовʼязкова
//     console.log("incorrect subscription name");
// }

// console.log(cost);

// task 1
// const minute = prompt("Enter minute");

// if (minute >= 0 && minute <= 14) {
//   console.log("First quater");
// } else if (minute >= 15 && minute <= 29) {
//   console.log("Second quater");
// } else if (minute >= 30 && minute <= 44) {
//   console.log("Third quater");
// } else if (minute >= 45 && minute <= 59) {
//   console.log("Fourth quater");
// } else console.log("Incorrect value");

// task 2
const value = prompt("Введіть назву товару").toLowerCase();
let cost;

switch (value) {
  case "яблуко":
    cost = 10;
    alert(`Вартість ${value} ${cost} гривень`);
    break;
  case "груша":
    cost = 15;
    alert(`Вартість ${value} ${cost} гривень`);
    break;
  case "кавун":
    cost = 50;
    alert(`Вартість ${value} ${cost} гривень`);
    break;
  case "вишня":
    cost = 70;
    alert(`Вартість ${value} ${cost} гривень`);
    break;
  default:
    alert(`Товару ${value} немає в наявності`);
}
