// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
const num1 = +prompt(`Введите первое число.`);
const num2 = +prompt(`Введите второе число.`);

num1 === 1
  ? alert(`Переменная num1 равна 1`)
  : num1 < 1
  ? alert(`Переменная num1 меньше 1`)
  : alert(`Переменная num1 больше 1`);

num2 === 3
  ? alert(`Переменная num2 равна 3`)
  : num2 < 3
  ? alert(`Переменная num2  меньше 3`)
  : alert(`Переменная num2 больше 3`);

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
