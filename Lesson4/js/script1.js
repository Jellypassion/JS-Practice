// Functions

function showMessage(message) {
  console.log(message);
}

// showMessage("Hello, my friend!");

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("У вас є дозвіл ваших батьків?");
  }
}

// let age = prompt("Скільки вам років?", 18);

// if (checkAge(age)) {
//   alert("Доступ надано");
// } else {
//   alert("У доступі відмовлено");
// }

// function sayHi() {
//   alert("Привіт");
// }
// alert(sayHi); // показує код функції

// let a = function () {
//   b();
//   console.log("func a");
//   c();
// };
// let b = function () {
//   console.log("func b");
// };
// let c = function () {
//   console.log("func c");
// };
// a();

// const addName = function () {
//   const args = Array.from(arguments);
//   console.log(args);
// };
// addName(1, 3, 5); // [1, 3, 5]

// const showArgs = function (...args) {
//   // "..." - це оператор Rest, імʼя поряд може бути довільне
//   console.log(args);
// };
// showArgs(1, 3, 5);

const hello = function (name) {
  console.log(`Hello ${name}`);
};
const searchName = function (callback, name) {
  // Замість calback можна використовувати будь-яку назву, але хорошою практикою вважається використання саме назви calback
  // name = "Ivan";
  callback(name);
};
searchName(hello, "Ivan");

// показувати фільм, залежно від віку
const showMovie = (age = prompt("How old are you?", 18)) => {
  if (age < 18) {
    console.log("You are not old enough(");
    return;
  }
  return console.log("Playing the movie...");
};
showMovie(22);

// функція, що додає 10 до заданого числа
const addNumberTen = (number) => Number(number) + 10;

// показати код сторінки
//console.log(document);
// посилання на input
const numberRef = document.querySelector("input[name='number']"); // якщо ми використовуємо посилання, то краще використовувати назвву Ref
const buttonRef = document.querySelector("button"); // перша кнопка, яка зустрінеться на сторінці

// додаємо eventListener до кнопки
// 1й параметр - це івент; 2й - це функція яка виконається по цьому івенту
buttonRef.addEventListener(
  "click",
  () => console.log(addNumberTen(numberRef.value)) // додати 10 до введеного числа
);
