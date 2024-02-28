// --------------------------//
// --------------------------//
// області видимості
// --------------------------//
// --------------------------//

// const a = 5;

// if (true) {
//   const b = 10;
//   console.log("Block", b);
// }

// console.log("Global", b);

// --------------------------//
// --------------------------//
// Цикли
// --------------------------//
// --------------------------//

// while

// let a = 0;

// while (a < 5) {
//   a++;
//   console.log("a", a);
// }

// let a = 0;

// while (a) console.log(a--);

// do while

// do {
//   console.log(a);
//   a++;
// } while (a < 5);

//for

// let a = 0;

// for (; a < 3; ) {
//   a++;
//   console.log(a);
// }

// break && continue

// let summ = 0;

// while (true) {
//   let value = +prompt("Введіть число");
//   if (!value) break;

//   summ += value;
// }

// console.log("Summ", summ);

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// --------------------------//
// --------------------------//
// масиви
// --------------------------//
// --------------------------//

// let arr1 = new Array(); // створення порожнього масиву
// let arr2 = []; // ще один спосіб створення

// let arr3 = ["Apple", "Orange", "Plum"]; // зазвичай використовують цей спосіб

// arr3[2] = "Lemon"; // присвоєння елементів

// arr3[3] = "Cherry";

// console.log(arr3[1]); // отримати елемент масиву

// console.log(arr3); // отримати весь масив
// console.log(arr3.length); // довжина масиву

// let arr4 = [1, "Hello", { key1: "value1", key2: "value2" }]; // масиви можуть містити різні типи даних

// arr3.push("Tomato"); // додає елемент в кінець масиву

// console.log(arr3);

// console.log(arr3.pop()); // видалити елемент в кінці масиву

// console.log(arr3);

// arr3.shift(); // видалити перший елемент масиву

// console.log(arr3);

// arr3.unshift("Tomat"); // додати елемент на початок масиву

// console.log(arr3);
// console.log(arr3.at(-2));

//перебір елементів масиву

// for (let i = 0; i < arr3.length; i++) {
//   // старий метод
//   console.log(arr3[i]);
// }

// for (let item of arr3) {
//   // більш зручний метод for-of
//   console.log(item); // цей спосіб не надає доступ до індексу
// }

// for (let key in arr3) {
//   console.log(arr[key]);// перебір за допомогою ключа (не дуже добрий варіант)
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]); // 5
// console.log(matrix[1]); // [4, 5, 6]

// --------------------------//
// --------------------------//
// методи присвоєння
// --------------------------//
// --------------------------//

// let a = 5;
// let b = a;

// a = 10;

// console.log(a);
// console.log(b);

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr2);

// --------------------------//
// --------------------------//
// методи масиву
// --------------------------//
// --------------------------//

// let arr = ["a", "b", "c", "d", "f"];

// arr.splice(2, 2);

// console.log(arr);

// console.log(arr.slice(1, 3));

// let a = [1, 2, 3];

// console.log(arr.concat(a, "test"));

// console.log(arr.indexOf("c", 1));

// console.log(arr.lastIndexOf("c"));

// console.log(arr.includes("c"));

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomato" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// console.log(fruts.find((item) => item.id === 1));

// console.log(fruts.filter((item) => item.id < 2));

// map

// let result = fruts.map((item) => item.name.length);
// console.log(result);

// let names = "Оля, Юля, Аня, Петя";

// let arr = names.split(", ");

// let newString = arr.join(", ");

// console.log(newString);

// let value = arr.reduce(
//   function (accumulator, item, index, array) {
//     // ...
//   },
//   [initial]
// );

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item) => summ + item);

// console.log(red);

let arr = [23, 45, 30];

let summ = arr.reduce((sum, item) => sum + item) / arr.length;
console.log(summ);

// знайти користувачів, для яких army.canJoin повертає true
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users = [
  { name: "Ivan", age: 16 },
  { name: "Petro", age: 20 },
  { name: "Vasil", age: 23 },
  { name: "Maxim", age: 30 },
];

let soldiers = users.filter((user) => army.canJoin(user));

console.log(
  soldiers.map((soldier) => soldier.name + "(age:" + soldier.age + ")")
);
