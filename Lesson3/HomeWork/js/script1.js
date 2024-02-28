//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

const fruts = [
  { id: 0, name: "Apple" },
  { id: 1, name: "Tomat" },
  { id: 2, name: "Cherry" },
  { id: 3, name: "Orange" },
];
let fruitNames = fruts.map((value) => value.name);
console.log(fruitNames);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
let evenNumbers = [];
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    evenNumbers.push(i);
    console.log(i);
  }
}

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

let i = 0;
while (i < 5) {
  console.log(`цифра ${i}!`);
  i++;
}

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

do {
  //   stringValue = prompt("Enter a number greater than 100");
  stringValue = 101;
  console.log(stringValue + " " + typeof stringValue);
  if (stringValue == null || Number(stringValue) / 1 == isNaN) break;
} while (Number(stringValue) <= 100);

//  -- 5 --
// Вирахуйте середній вік

const girls = [
  { age: 23, name: "Оля" },
  { age: 29, name: "Аня" },
  { age: 10, name: "Юля" },
  { age: 20, name: "Катя" },
];

let midAge =
    girls.map((girl) => girl.age)
        .reduce((sum, current) => sum + current) / girls.length;
console.log(Math.round(midAge));
