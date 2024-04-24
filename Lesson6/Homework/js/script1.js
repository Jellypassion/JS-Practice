/*Створити телефонну книгу
- створити початковий клас Abonent, де зберігатимуться ім*я і номер створити set який прийматиме телефон і номер
- створити get який виводитиме данні про абонента
- створити три різних юзери
- вивести данні*/
class Abonent {
  constructor(name, number) {
    this._name = name;
    this._number = number;
  }

  set name(newName) {
    this._name = newName;
  }
  get name() {
    return this._name;
  }

  set number(newNumber) {
    this._number = newNumber;
  }
  get number() {
    return this._number;
  }

  get data() {
    return `Name: ${this._name} \nPhone Number: ${this._number}`;
  }
}

let abonent1 = new Abonent("Ivan Petrov", "063555444333");
let abonent2 = new Abonent("Petro Ivanov", "0950001122");
let abonent3 = new Abonent("Maria Ivanova", "0776667766");

console.log(abonent1);
console.log(abonent2.data);
console.log(abonent3.name + "\n" + abonent3.number);
