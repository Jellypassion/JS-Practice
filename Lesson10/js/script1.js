// Lesson 10. Local Storage & node.js

// Якщо на сторінці присутня форма, то після оновлення сторінки усі заповнені поля збиваються
// Для того щоб введені дані зберігались, можна використовувати LocalStorage
// Збережені дані можна переглянути в Application -> Local storage

//let nameInputValue = document.querySelector("#name").value;
localStorage.setItem("name", "Ivan");
const savedName = localStorage.getItem("name");
// console.log("name: " + savedName);

function checkSex() {
  let val = document.getElementsByName("sex");
  if (val[0].checked) {
    console.log("Чоловіча");
    return "Male";
  } else if (val[1].checked) {
    console.log("Жіноча");
    return "Female";
  } else return undefined;
}

let checkAge = () => document.querySelector(".isOldEnoughCheckBox").checked;

let form = document.querySelector(".form");
let nameInput = document.querySelector(".inputName");
let lastNameInput = document.querySelector(".inputLastName");
let sex = document.getElementsByName("sex");
let ageElement = document.querySelector(".isOldEnoughCheckBox");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // функція викликається для того щоб форма не відправлялась по кожній зміні
  event.preventDefault();
  let userInfo = {
    name: nameInput.value,
    lastName: lastNameInput.value,
    sex: checkSex(),
    isOldEnough: checkAge(),
  };
  //   console.log(userInfo);
  // Зберігаємо дані юзера в локалСторадж
  // Оскільки локалСторадж зберігає дані у форматі ключ-значення, ми не можемо зберегти як значання обʼєкт
  // але можемо зробити з нього стрінгу за допомогою спец. метода
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
// Потім це значення можна розпарсити
//const parsedUserInfo = () => JSON.parse(localStorage.getItem("userInfo"));
//console.log(parsedUserInfo());

/// Заповнюємо форму збереженими даними, якщо вони є
function fillFormIfDataPrsent(userData, fillFormFn) {
  console.log(userData);
  if (userData) fillFormFn();
}

function fillForm() {
  const parsedUserData = JSON.parse(localStorage.getItem("userInfo"));
  nameInput.value = parsedUserData.name;
  lastNameInput.value = parsedUserData.lastName;
  if (parsedUserData.sex === "Male") {
    sex[0].checked = true;
  }
  if (parsedUserData.sex === "Female") {
    sex[1].checked = true;
  }
  if (parsedUserData.isOldEnough) {
    ageElement.checked = true;
  }
}

const lsUserInfo = localStorage.getItem("userInfo");
fillFormIfDataPrsent(lsUserInfo, fillForm);
/// fillForm тут - це колбек (функція зворотнього виклику)
// Дана реалізація показана просто для прикладу. Зазвичай витягування по полю не використовують через те що виходить забагато коду
