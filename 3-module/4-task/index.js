/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {

  // Ниже я представил три решения
  // (последние два закомментированы).
  // Какой вариант предпочтительнее? Почему?
  // Есть ли более оптимальное решение данной задачи?

  // Вариант 1 (через метод массива reduce и тернарный оператор)
  let salaryRegister = users.reduce((str, user) =>
    user.age <= age ? str + `${user.name}, ${user.balance}\n` : str, '');

  return salaryRegister.slice(0, salaryRegister.length - 1);

  // Вариант 2 (через метод массива reduce и условный оператор if)
  // return users.reduce((str, user, index, array) => {
  //   if (user.age <= age) {
  //     str += `${user.name}, ${user.balance}\n`;
  //   }

  //   let lastIndex = array.length - 1;

  //   if (index != lastIndex) {
  //     return str;
  //   } else {
  //     return str.slice(0, str.length - 1);
  //   }
  // }, '');

  // Вариант 3 (через цикл for..of)
  // let salaryRegister = '';

  // for (let user of users) {
  //   if (user.age <= age) {
  //     salaryRegister += `${user.name}, ${user.balance}\n`;
  //   }
  // }

  // return salaryRegister.slice(0, salaryRegister.length - 1);
}
