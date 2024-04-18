// процедурне програмування
const sum = 20000;
const month = 12;
const p = 1000; // p - це пеня

const credit = (sum, date, p) => {
  return sum + p * date;
};

// console.log(credit(sum, month, p));

// Обʼєктно-орієнтоване програмування

const creditObj = {
  sum: 20000,
  month: 12,
  p: 1000,
  result() {
    return this.sum + this.p * this.month;
  },
};
// console.log(creditObj.result());

// Класи
// створення класу
class Bank {
  // статичні дані у класі
  static type = "Privat";
  constructor(options) {
    this.summ = options.summ;
    this.month = options.month;
    this.p = options.p;
  }
  // метод класу
  credit() {
    return console.log("Credit by Privat");
  }
}
// створення обʼєкту класу
const userBank = new Bank({
  summ: 30000,
  month: 5,
  p: 500,
});
// обʼєкт класу унаслідував метод credit()
userBank.credit(); // 32500

console.log(userBank.type); // undefined
// тому що статичні дані доступні з класу, а не з обʼєкта
console.log(Bank.type); // Privat

// наслідування класу
class NewBank extends Bank {
  constructor(options) {
    // виклик конструктора суперкласу (без цього поля будуть undefined)
    super(options);
    // додаємо нове поле до вже існуючих у суперкласі
    this.card = options.card;
  }
  // перевизначення методу суперкласу
  credit() {
    // якщо потрібно викликати метод суперклсу
    super.credit();
    // потім до реалізації методу суперкласу додаємо інший функціонал
    console.log("Credit by Aval");
  }
}

const aval = new NewBank({
  summ: 30000,
  month: 12,
  p: 600,
  card: true,
});
console.log(aval.card); // true
aval.credit(); // Credit by Privat
//Credit by Aval

// Get & Set
class User {
  constructor(props) {
    this.name = props.name;
  }

  firstName = "";
  lastName = "";
  age = "";
  city = "";

  // setter
  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }

  // getter
  get name() {
    return `First name: ${this.firstName} \nLast name: ${this.lastName}`;
  }
}

let userIvan = new User({
  name: "Ivan Petrov",
});
console.log(userIvan); // User {firstName: 'Ivan', lastName: 'Petrov', age: '', city: ''}
console.log(userIvan.name); // First name: Ivan
//Last name: Petrov

// Prototypes
const a = {
  x: 1,
  y: 2,
};

const b = Object.create(a); // створення обʼєкта у якого є заданий прототип

console.log(b.x);

// Another example of prototypes
const Manager = function (name, discount) {
  this.name = name;
  this.discount = discount;

  // замість визначення цієї функції у самому обʼєкті ми можемо використати prototype
  this.increaseDiscount = function () {
    this.discount += 1;
  };
};
const ann = new Manager("Ann", 5);
const ivan = new Manager("Ivan", 10);

// prototype дає можливість зекономити памʼять (не описуючи цю функцію для кожного екземплара класу)
// замість цього ми зробили цю функцію глобально доступною для кожного обʼєкта
Manager.prototype.increaseDiscount = function () {
  this.discount += 1;
};

console.log(ann); // Manager {name: 'Ann', discount: 5, increaseDiscount: ƒ}
ann.increaseDiscount();
console.log(ann); // Manager {name: 'Ann', discount: 6, increaseDiscount: ƒ}
console.dir(Manager); // displays a list of the properties of the specified JavaScript object

// private and protected fields
class CoffeMachine {
  _water = 0; // protected (also can mean private) field
  #waterLimit = 100; // private field

  constructor(power) {
    this.power = power;
  }

  set waterAmount(value) {
    // Handle negative values by setting water to 0 if value is less than 0
    if (value < 0) {
      console.log("Warning: Water amount cannot be negative. Setting to 0.");
      value = 0;
    }
    this._water = value;
  }
}

let coffeMachine1 = new CoffeMachine(100);
console.log(coffeMachine1);
coffeMachine1.waterAmount = 10;
console.log(coffeMachine1);
