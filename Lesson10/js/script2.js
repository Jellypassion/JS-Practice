// Lesson 10. Local Storage & node.js

// Приклад роботи з localStorage #2 (оснований на айдішках/іменах елементів).
//Саме такий підхід слід використовувати для збереження введених даних у формі після оновлення сторінки
let form = document.querySelector("#form");
let formData = {};

// input - це івент який відбуваэться при кожному введенні (натисканні символьної клавіші або видаленні)
// event тут - це сам input
form.addEventListener("input", function (event) {
  formData[event.target.name] = event.target.value; // беремо значення атрибуту name елемента як ключ і присвоюємо йому значення введеного тексту (яке змінюється при кожному введенні/видаленні символа)
  localStorage.setItem("formData", JSON.stringify(formData));
});

// Дані в локал сторадж збережені, тепер можемо їх дістати
if (localStorage.getItem("formData")) {
  formData = JSON.parse(localStorage.getItem("formData"));
  for (const key in formData) {
    // в колекції form.elements ключем являється id елемента
    form.elements[key].value = formData[key];
  }
}
