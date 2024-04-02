// Замикання
// 1
function getNewResult(n) {
  return function () {
    console.log(10 * n);
  };
}
// функція замикає в собі іншу функцію
const result = getNewResult(5);
result();

// 2
function createNewNumber(n) {
  return function (number) {
    return n + number;
  };
}

const addFive = createNewNumber(5);
//console.log(addFive);
console.log(addFive(10));

// 3
function createUrl(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}
const dotCom = createUrl("com");
console.log(dotCom("google"));

//_________________________________________//
//_________________________________________//
// this
function hello() {
  console.log("hello", this);
} // this - це контекст
hello();

const user = {
  name: "Ivan",
  city: "Kyiv",
  sayHello: hello, // тут контекстом являється сам обʼєкт user
};
user.sayHello();

// function showContext() {
//   console.log("В Функції:");
//   console.log(this);
// }
// document.querySelector("p").onclick = showContext;
// по кліку на <p> у консоль вивдеться:
//В Функції:
//<p>​Hello!​</p>​
function changeBgColor() {
  //console.log(this);
  if (this.style.background != "green") {
    this.style.background = "green";
  } else this.style.background = "rgb(33, 6, 52)";
  console.log(`changed bg color to ${this.style.background}`);
}
document.querySelector("#good-div").onclick = changeBgColor; // змінює колір бекграунда по кліку на div

// вибрати всі селоктори класа user
let users = document.querySelectorAll(".user");
// по кліку на юзера, змінюється колір бекграунда
users.forEach((element) => {
  element.onclick = changeBgColor;
});

// const showList = () => {
//   console.log(this);
// };
// const userList = {
//   names: ["Ann", "Ira", "Olga"],
//   showList: showList,
// };
// userList.showList();

//_______________//
//_____bind_____//
function hello() {
  console.log(this);
}

const userIvan = {
  name: "Ivan",
  age: 30,
  hello: hello,
  sayHelloWindow: hello.bind(window),
  showInfo: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  },
};
userIvan.hello; // {name: 'Ivan', city: 'Kyiv', sayHello:
//userIvan.sayHelloWindow;// Window
// метод bind створює звязану функцію, що має такке саме тіло, що і вихідна функція
//userIvan.showInfo(); //Name: Ivan Age: 30
// створюємо ще одного юзера, у якого немає потрібного метода
const userAnn = {
  name: "Ann",
  age: 25,
};
// Але за допомогою bind можна використати функцію з іншого місця
//userIvan.showInfo.bind(userAnn)(); // Name: Ann Age: 25
// така реалізація одночасно байндить і викликає функцію

// example 3
const userIvan2 = {
  name: "Ivan",
  age: 30,
  hello: hello,
  sayHelloWindow: hello.bind(window),
  // якщо у функції є параметри
  showInfo: function (city) {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`City: ${city}`);
  },
};
// то їх можна передати двома способами:
// userIvan2.showInfo.bind(userAnn)("Kyiv");
// userIvan2.showInfo.bind(userAnn, "Odessa")();

//_____________________//
//________call________//
const userInfo = {
  name: "name",
  age: 55,
  logInfo: function (job) {
    console.group(`${name} info:`); // групування логів
    console.log(`Name is: ${this.name}`);
    console.log(`Age is: ${this.age}`);
    console.log(`Job is: ${job}`);
    console.groupEnd();
  },
};
//userInfo.logInfo();
const userOlga = {
  name: "Olga",
  age: 26,
};
// метод call на відміну від bind просто викликає функцію з іншого обʼєкта
userInfo.logInfo.call(userOlga, "Singer"); // info: Name is: Olga Age is: 26 Job is: Singer

//_____________________//
//________apply________//
const showUserInfo = {
  name: "name",
  age: 55,
  logInfo: function (job, city) {
    console.group(`${this.name} info:`);
    console.log(`Name is: ${this.name}`);
    console.log(`Age is: ${this.age}`);
    console.log(`Job is: ${job}`);
    console.log(`City is: ${city}`);
    console.groupEnd();
  },
};

const vano = {
  name: "Ivan",
  age: 45,
};

//apply працює так само як і call, тільки аргументи передаються як масив
showUserInfo.logInfo.apply(vano, ["developer", "Lviv"]);

// task 1: показувати користувачеві вітання із його імʼям, назвою готелю та кількістю зірок
const message = function (name, stars) {
  console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
};
const bukovel = { hotel: "Bukovel" };
const tourist = { hotel: "Tourist" };
message.call(bukovel, "Ivan", 5); // Ivan, Welcome to Bukovel, stars 5
message.apply(tourist, ["Olga", 3]); // Olga, Welcome to Tourist, stars 3
message.bind(bukovel, "Viktoria", 5)(); // Viktoria, Welcome to Bukovel, stars 5

// task 2: Показати при натисканні на кнопку які товари у корзині
const cart = {
  showItems() {
    console.log("В корзині:", this.items);
  },
};

const women = {
  items: ["сукня", "туфлі"],
};
const men = {
  items: ["костюм", "рубашка"],
};
const child = {
  items: ["майка", "шорти"],
};

document
  .querySelector("#wom")
  .addEventListener("click", cart.showItems.bind(women));
document
  .querySelector("#men")
  .addEventListener("click", cart.showItems.bind(men));
document
  .querySelector("#kid")
  .addEventListener("click", cart.showItems.bind(child));

// task 3: вивести в консоль інформацію про машину
const infoCar = {
  name: "BMW",
  model: "M7",
  color: "black",
  showInfo: function () {
    console.log(
      "Car: " + this.name + " model: " + this.model + " color: " + this.color
    );
  },
};
car2 = {
  name: "Opel",
  model: "Zafira",
  color: "Red",
};
infoCar.showInfo.bind(car2)(); // Car: Opel model: Zafira color: Red
infoCar.showInfo.call(car2); // Car: Opel model: Zafira color: Red
infoCar.showInfo.apply(car2); // Car: Opel model: Zafira color: Red
