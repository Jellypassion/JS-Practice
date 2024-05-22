// DOM

// метод для отримання елементу по айді. Айді має бути унікальнім для кожного елемента
let elem = document.getElementById("elem");
elem.style.background = "green";

// отримати всі елементи <li>, які є останніми дочірніми елементів <ul>
let elements = document.querySelectorAll("ul>li:last-child");
for (element of elements) {
  console.log(element.innerText);
}
// отримання елементів по назві тегу
let elements2 = document.getElementsByTagName("div");
console.log(elements2);

// спосіб приховти текст
let textToHide = document.getElementById("textHidden");
textToHide.hidden = true;

let message = document.getElementById("message");
// отримати значення елементу
console.log(message.value); // Some text

// Отримати елемент по назві класу
let textMessage = document.querySelector(".text-message");
console.log(textMessage.textContent); // отримання тексту з елемента
textMessage.textContent = "Hello, Eugene"; // так можна динамічно задавати текст у елементі

// так можна динамічно міняти стилі
let button = document.querySelector(".button");
button.style.backgroundColor = "red";

//взаємодія з елементами клас-ліста
let text1 = document.querySelector("#p_text");

// повертає список класів елементу
console.log(text1.classList); // ['big', 'text', 'red']

// перевіряє чи є цей клас у списку класів (повертае boolean)
console.log(text1.classList.contains("red")); // true

// видаляє клас зі списку
text1.classList.remove("red");
console.log(text1.classList.contains("red")); // false

// додає клас
text1.classList.add("new");
console.log(text1.classList); // ['big', 'text', 'new']

// робота з атрибутами

let image = document.querySelector(".image");
// перевіряє чи є такий атрибут
console.log(image.hasAttribute("src")); // true
// отримати значення атрибуту
console.log(image.getAttribute("src"));

// створення елементу
const item = document.createElement("a");
item.href = "#";
item.classList.add("btn");
item.textContent = 3;

const nav = document.querySelector(".nav");
// додаємо елемент як дочірній у nav
nav.appendChild(item);

const heading = document.createElement("h1");
heading.textContent = "Hello";

const container = document.querySelector(".container");
// додаємо елемент у контейнер; 1 пар. - єлемент що додаємо, 2 пар. - елемент перед яким додаємо
container.insertBefore(heading, nav);

// видалення елементу
// метод 1 (старий, але працює у всех браузерах)
//nav.removeChild(item);
// метод 2 (може працювати не всюди)
item.remove();

// клонування елементу
const lorem = document.querySelector(".lorem");
const loremParent = document.querySelector(".parent");
// якщо аргумент true, то елемент клонується разом з нащадками
const loremClone = lorem.cloneNode(true);
loremParent.appendChild(loremClone); // створює ще один параграф з текстом

// Додавання html динамічно

// При використанні данного способу сторінка перерендерюється (що часто не є бажаним)
const container2 = document.querySelector(".container2");
const innerText = "<p>Sorry</p>";
// Замінює існуючий внутрішній html на заданий
container2.innerHTML = innerText; // замість Hello буде Sorry
// якщо потрібно додати html до вже існуючого
container2.innerHTML += innerText; // Sorry Sorry

// Спосіб 2. Економить ресурси
const list = document.querySelector("#list");
// метод має різні варіанти позицій для вставки html
list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
list.insertAdjacentHTML("afterbegin", "<p>afterbegin</p>");
list.insertAdjacentHTML("beforeend", "<p>beforeend</p>");
list.insertAdjacentHTML("afterend", "<p>afterend</p>");

// типи перемальовування сторінки
// repaint - відбувається тоді, коли зміни відбулись в стилях елементів
// reflow - відбувається, коли зміни торкаються структури документа і положення елементів

// HomeWork
/*Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
та прочитати його значення.*/

// Використовуємо querySelectorAll для вибору всіх елементів з атрибутом data-widget-name
let searchedElements = document.querySelectorAll("[data-widget-name]");

for (const element of searchedElements) {
  console.log(element.getAttribute("data-widget-name")); // виводить значення атрибуту
}
