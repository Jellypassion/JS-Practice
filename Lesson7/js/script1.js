// task 1. Use of inheritance
class CircleBox {
  constructor(selector) {
    // по конвенції, складеній між програмістами, селектор позначається символом $
    this.$el = document.querySelector(selector);
  }

  // функції для відображення/ховання елементів можна викликати через консоль, напр. circleRed.hide()
  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class CircleItem extends CircleBox {
  constructor(options) {
    // імплементуємо конструктор суперкласу
    super(options.selector);
    // задаємо розміри та колір кола
    this.$el.style.width = options.size + "px";
    this.$el.style.height = options.size + "px";
    this.$el.style.borderRadius = "50%";
    this.$el.style.background = options.color;
    this._defaultColor = options.color;
  }

  greyOut() {
    this.$el.style.background = "grey";
  }

  setDefaultColor() {
    this.$el.style.background = this._defaultColor;
  }
}

const circleRed = new CircleItem({
  selector: "#circleRed",
  size: 50,
  color: "red",
});

const circleYellow = new CircleItem({
  selector: "#circleYellow",
  size: 50,
  color: "yellow",
});

const circleGreen = new CircleItem({
  selector: "#circleGreen",
  size: 50,
  color: "green",
});

let circlesArr = [circleRed, circleYellow, circleGreen];

for (let circle of circlesArr) {
  circle.$el.addEventListener("click", () => {
    if (circle.$el.style.background != "grey") {
      circle.greyOut();
    } else if (circle.$el.style.background === "grey") {
      circle.setDefaultColor();
    } else console.log("Some error when hiding/showing a circle");
  });
}

//task 2. Use of prototypes

// функція-конструктор
function Car(name, color) {
  this.name = name;
  this.color = color;
}

// Створеня функції прототипу
Car.prototype.message = function () {
  console.log(`Car ${this.name} is ${this.color}`);
}; // цю функцію можна викликати через консоль, написавши напр. BMW.message()

Car.prototype.start = function () {
  console.log(`Car ${this.name} started!`);
};

const BMW = new Car("BMW", "red");
const opel = new Car("Opel", "black");
// "BMW.message" повертає у консоль: Car BMW is red
// "BMW.start" повертає у консоль: Car BMW started!

// Міксини

let message = {
  messageHello() {
    console.log(`Hello, ${this.name}`);
  },
  messageBye() {
    console.log(`Bye, ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}
// Копіює значення якихось властивостей у заданний обʼєкт
// У даному випадку ми копіюємо міксин message як значення для прототипу в класі User
Object.assign(User.prototype, message);

new User("Ivan").messageHello(); // Hello, Ivan

//////////////////////////

// якщо тіло функції займає лише один рядок, то фігурні дужки можна не ставити
if (a === 5) console.log("Ok");

// Якщо у нас є змінна з довгим текстом, то краще використовувати такі кавички ``.
// У такому разі текст можна переносити на наступний рядок. Це робиться для зручної читабельності
const longText = `ajsdb jsbdvsb asjdbcahsbjba ksdbkasdcnalm ajsdb jsbdvsb
asjdbcahsbjba ksdbkasdcnalmajsdb jsbdvsb
  asjdbcahsbjba ksdbkasdcnalmajsdb jsbdvsb asjdbcahsbjba`;
// Те саме стосується if'ів. Якщо у if багато умов, то краще переносити ії на наступний рядок
