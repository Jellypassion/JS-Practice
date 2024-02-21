let a = 10;
console.log("a=" + a);
a = a + 5;
console.log("a=" + a);
console.log("a is a " + typeof a);
let b = Number("bbb");
// b = Number(b);
// console.log("b is a " + typeof Number(b)+ "\n" + "b=" + b);
console.log(typeof b);
console.log(Number.isNaN(b));

// console.log(typeof Number.parseFloat("55.11jfv"))
console.log("\n");

//складання з крапкою
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 * 10 + 0.2 * 10) / 10);

//Объект Math

//  Math.floor(num) - повертає найбільше ціле число, меньше,
//або  таке, що дорівнює вказаному
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає наименьше ціле число, більше,
// або  таке, що дорівнює вказаному
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа,
// округлене до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - повертає найбільше число із набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - повертає наменше число із набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - повертає в степінь
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - повертає випадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // випадкове число від 1 до 10
// console.log(Math.floor(Math.random() * (10 - 1) + 1)); // ціле випадкове число від 1 до 10

let name1 = "Eugene";
console.log(`Hello ${name}\n`);
console.log(name1.toUpperCase());
console.log(name1.indexOf("n"));
console.log(name1.includes("e"));
console.log("\n\n////////////////////////\n\n\n");

// Конкатенація;
let result;

result = 5 + "5";
console.log(result); // '55'
console.log(typeof result); // string

result = 5 + "5" + 5;
console.log(result); // '555'
console.log(typeof result); // string

result = 5 + 5 + "5";
console.log(result); // '105'
console.log(typeof result); // string

// let age = prompt('Скільки вам років?', 100);

// alert(`Вам ${age} років!`); // Вам 100 років!

const js = "JavaScript";
console.log(js.slice(-6));

// Об*єкти

// let user = {
//   // об’єкт
//   name: "Іван", // за ключем "name" зберігаємо значення "Іван"
//   age: 30, // за ключем "age" зберігати значення "30"
//   work: true,
// };
// console.log(user);
// // отримаємо значення властивостей об’єкта:
// console.log(user.name); // Іван
// console.log(user.age); // 30

// let user2 = {
//   name: "Іван",
//   age: 30,
//   "likes birds": true, // Ім’я властивості з декількох слів повинно бути в лапках
// };
// delete user2.age;
// console.log(user2);
// console.log(user2.age);
// console.log(user2["likes birds"]);// якщо ключ складається з кількох слів, то його слід указувати у ["..."]

// let user3 = { };
// console.log(user3);
// user3.name = "Nick";
// user3.age = 45;
// user3.mood = "Great";
// console.log(user3);

// Цикл “for…in”
// for (key in object) {
//     // тіло циклу виконується для кожної властивості обʼєкта
// }

// let userN = {
//   name: "Петро",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in userN) {
//   // ключі
//   console.log("\n" + key + ":"); // name, age, isAdmin
//   // значення ключів
//   console.log(userN[key]); // Іван, 30, true
// }

// Впорядкування властивостей об’єкта
// let codes = {
//   49: "Німеччина",
//   41: "Швейцарія",
//   44: "Великобританія",
//   1: "США",
// };
// console.log("");

// for (let code in codes) {
//     console.log(code + " - " + codes[code]);
// }

//чисельні властивості
let user = {
  name: "Іван",
  surname: "Smith",
};
user.age = 25; // добавимо ще одну властивість


// не цілочисельні властивості перераховані в порядку створення
for (let prop in user) {
  console.log(prop);
} // name, surname, age
