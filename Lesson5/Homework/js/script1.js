// task 1
/*1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
бал і кількість пропущених занять
2) написати метод який буде виводити цю інформацію
3) написати три варіанти студентів
4) прикріпити знначення за допомогою call apply bind*/
const student = {
  name: "",
  specialty: "",
  avgMark: "",
  missedLessons: "",
  showStudentInfo() {
    console.log(
      `Name: ${this.name}\nSpeciality: ${this.specialty}\nAverage mark: ${this.avgMark}\nNo of missed lessons: ${this.missedLessons}`
    );
  },
};
// student.showStudentInfo();
let student1 = {
  name: "Ivan",
  specialty: "AI",
  avgMark: "4",
  missedLessons: "10",
};
let student2 = {
  name: "Petro",
  specialty: "AI",
  avgMark: "3.5",
  missedLessons: "24",
};
let student3 = {
  name: "Vasil",
  specialty: "AI",
  avgMark: "4.2",
  missedLessons: "5",
};
// student.showStudentInfo.call(student1);
// student.showStudentInfo.apply(student2);
// student.showStudentInfo.bind(student3)();

// task 2
/*Написати дві кнопки і закріпити на них функції
при натисканні на кнопку html - має видати коротке визначення що це таке
при натисканні на кнопку css - має видати коротке визначення що це таке*/
const definition = {
  showDef() {
    console.log(this.def);
  },
};
const html = {
  def: "HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері. Браузери отримують HTML документ від сервера за протоколами HTTP/HTTPS або відкривають з локального диска, далі інтерпретують код в інтерфейс, який відображатиметься на екрані монітора.",
};
const css = {
  def: "CSS — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду. Самі ж сторінки написані мовами розмітки даних. CSS є основною технологією всесвітньої павутини, поряд із HTML та JavaScript",
};
document
  .querySelector("#html")
  .addEventListener("click", definition.showDef.bind(html));
document
  .querySelector("#css")
  .addEventListener("click", definition.showDef.bind(css));

// task 3
/*Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
функція має повертати назву товару і вартість
перевірити на варіантах:
1) banana 30, 4,5
2) cherry 58, 1,3
3) jrange 89. 3,4*/
const nameRef = document.querySelector("input[name='name']");
const pricePerKgRef = document.querySelector("input[name='ppkg']");
const amountRef = document.querySelector("input[name='amount']");
const calcButtonRef = document.querySelector("#calc");

const item = {
  name: "",
  pricePerKg: 0,
  amount: 0,
  calcTotalPrice() {
    let totalPrice = this.pricePerKg * this.amount;
    console.log("Name: " + this.name);
    console.log("Total Price: " + totalPrice);
  },
};

const banana = {
  name: "Banana",
  pricePerKg: 30,
  amount: 4.5,
};
// v1 (hardcoded object)
// document
//   .querySelector("#calc")
//   .addEventListener("click", item.calcTotalPrice.bind(banana));

//
const itemFromInput = {
  name: nameRef.value,
  pricePerKg: pricePerKgRef.value,
  amount: amountRef.value,
  calcPrice() {
    //console.log(item.calcTotalPrice.call(this));
    let price = this.pricePerKg * this.amount;
    console.log(`Name: ${this.name}`);
    console.log("Total Price: " + price);
  },
};
calcButtonRef.addEventListener("click", itemFromInput.calcPrice);
