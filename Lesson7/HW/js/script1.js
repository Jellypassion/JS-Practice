/* Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта.
sum() повертає суму цих властивостей.
mul() повертає результат множення даних властивостей.*/

function Calculator() {
  //методи read, sum, та mul потрібно прив'язати до об'єкта Calculator
  this.read = function () {
    let number1 = prompt("Enter first number", 0);
    let number2 = prompt("Enter second number", 0);
    this.number1 = +number1; // конвертуємо введені значення в числа
    this.number2 = +number2;
    console.log(
      `First Number: ${this.number1}\nSecond Number: ${this.number2}`
    );
  };

  this.sum = function () {
    return this.number1 + this.number2;
  };

  this.mul = function () {
    return this.number1 * this.number2;
  };
}

let numbersPair1 = new Calculator();

numbersPair1.read();
console.log(`Sum = ${numbersPair1.sum()}`);
console.log(`Multiplication = ${numbersPair1.mul()}`);
