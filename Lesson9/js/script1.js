// DOM #2
/*Події
форми
event propagation
Drag'n'Drop*/
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");

// Події з мишкою:
btn1.addEventListener("click", () => console.log("click"));
// тип івенту "contextmenu" означає клік правою кнопкою миші
btn2.addEventListener("contextmenu", () => console.log("contextmenu"));
// тип івенту "mouseover" означає наведення міші на елемент
btn3.addEventListener("mouseover", () => console.log("mouseover"));
// івенту "mouseout" виконується коли миша приберається з елементу
btn3.addEventListener("mouseout", () => console.log("mouseout"));
// івенти mousedown/mouseup виконуються коли кнопка миші натискається/відпускається
btn4.addEventListener("mousedown", () => console.log("mousedown"));
btn4.addEventListener("mouseup", () => console.log("mouseup"));
// івент "mousemove" спрацьовує на рух миші по елементу
btn5.addEventListener("mousemove", () => console.log("mousemove"));

// Події з клавіатурою

// івент спрацьовує при натисканні будь-якої кнопки на клавіатурі
btn6.addEventListener("keydown", () => console.log("keydown"));

// task 2
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const clickBtn = document.querySelector("#click");

const handleClick = () => {
  console.log("Hello");
};

// по кліку на кнопку "Add" вішається івент ліснер на кнопку "Click"
addBtn.addEventListener("click", () => {
  clickBtn.addEventListener("click", handleClick);
  console.log("Listener added");
});

// по кліку на кнопку "Remove" приберається івент ліснер на кнопці "Click"
removeBtn.addEventListener("click", () => {
  clickBtn.removeEventListener("click", handleClick);
  console.log("Listener removed");
});

/////////////////////////////
const clickBtn2 = document.querySelector("#click2");
//метод який виведе інформацію про івент
const infoClick = (event) => {
  console.log("event", event.type);
  // console.log("event", event.type); // так можна отримати доступ до полів в "interface Event"
};
clickBtn2.addEventListener("click", infoClick);

//task3
const form = document.querySelector(".form");
const loginInput = form.querySelector("input[type='text']"); // тут ми знаходимо елемент звертаючись через батьківський елемент
const passInput = form.querySelector("input[type='password']");

// при івенті типу submit, на відміну від click, браузер викликає перезавантаження сторінки
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault(); // метод зупиняє подію (щоб перезавантаження сторінки не відбулось)
  const login = loginInput.value;
  const password = passInput.value;
  console.log(`Login: ${login} \nPassword: ${password}`);
  form.reset(); // очищає форму
}

//task4
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const item = document.querySelector("#item");

// parent.addEventListener("click", () => console.log("Click on Parent"));
// child.addEventListener("click", () => console.log("Click on Child"));
// item.addEventListener("click", () => console.log("Click on Item"));
//Тут при кліку на item у консоль виведуться усі три повідомлення, тому що item знаходиться у середині жвох інших елементів

//замість вішяння ліснера на кожен зцих елементів, ми можемо зробити ліснер тільки для парента та використати властивість "target"
const handleClickOnParent = (event) => {
  console.log("event: ", event.target);
};
parent.addEventListener("click", handleClickOnParent); //залежно від елементу по якуму відбувся клік, цей елемент виведеться у консоль

//Ще один спосіб обмежити розповсюдження кліку
const itemClick = (event) => {
  console.log("itemClick stop");
  event.stopPropagation(); // цей метод зупиняє розповсюдження івенту на батьківські елементи
  // Але цю функцію не слід юзати без потреби, бо можуть зʼявитись свої підводні камені
};
const childClick = (event) => {
  console.log("childClick stop");
  event.stopPropagation();
};
const parentClick = (event) => {
  console.log("parentClick stop");
  event.stopPropagation();
};

item.addEventListener("click", itemClick); //тому при кліку на найнижчий у ієрархії елемент,у консоль виведеться лише "itemClick stop" і далі не буде розпосюджуватись на батьківські елементи
child.addEventListener("click", childClick);
parent.addEventListener("click", parentClick);

//task5
const nav = document.querySelector(".nav");
nav.addEventListener("click", handleClickOnNav);

function handleClickOnNav(event) {
  const checkClass = nav.querySelector("li.active"); // перевіряємо чи елемент вже має клас active
  if (checkClass) {
    event.target.classList.remove("active");
  } else {
    event.target.classList.add("active"); //по кліку на елемент, йому додається клас
  }
}

//task6 dragNdrop
const ball = document.querySelector(".ball");

ball.onmousedown = function (event) {
  function move(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px";
    ball.style.top = pageY - ball.offsetWidth / 2 + "px";
  }

  move(event.pageX, event.pageY);

  function onMouseMove(event) {
    move(event.pageX, event.pageY);
  }
  document.addEventListener("mousemove", onMouseMove);

  ball.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
  };
};
