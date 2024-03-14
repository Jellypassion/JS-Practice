// 1
// Перепишіть функцію, використовуючи '?' або '||'
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Батьки дозволили?");
  }
}

function checkAge2(age) {
  return age > 18 ? true : confirm("Батьки дозволили?");
}
//checkAge(15);
checkAge2(19);

// 2
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b
function min(a, b) {
  if (a < b) return a;
  else return b;
}
console.log(min(5, 4));

// 3
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Ви згодні?",
  function () {
    alert("Ви погодились.");
  },
  function () {
    alert("Ви скасували виконання.");
  }
); */
const question = "Ви згодні?";
const yes = "Ви погодились.";
const no = "Ви скасували виконання.";

let reply = confirm(question);
let replyAction = reply ? () => alert(yes) : () => alert(no);
replyAction();
