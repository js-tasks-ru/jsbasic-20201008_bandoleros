/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let formatted = str.split(',').join(' ').split(' ');

  // =======================
  // Получение массива чисел
  // =======================
  // Вариант 1
  let numbers = formatted.reduce((cumulative, item) => {
    if (isFinite(item) && !!item) {
      cumulative.push(+item);
    }

    return cumulative;
  }, []);

  // Вариант 2
  // let numbers = [];

  // for (let item of formatted) {
  //   if (isFinite(item) && !!item) {
  //     numbers.push(+item);
  //   }
  // }

  // В первом варианте числа получаются
  // через метод массива reduce, а во втором -
  // через цикл for..of. Какой вариант
  // предпочтительнее? Почему?

  // ======================================
  // Получение min и max и создание объекта
  // ======================================
  // Вариант 1
  let result = {};

  result['min'] = Math.min(...numbers);
  result['max'] = Math.max(...numbers);

  // Вариант 2
  // let min = numbers.reduce((previous, current) =>
  //   Math.min(previous, current), 0);

  // let max = numbers.reduce((previous, current) =>
  //   Math.max(previous, current), 0);

  // let result = {};

  // result['min'] = min;
  // result['max'] = max;

  // В первом варианте значения min и max
  // получаются через оператор расширения,
  // а во втором - через метод массива reduce.
  // Какой вариант предпочтительнее? Почему?
  //
  // В первом варианте определение min и max
  // осуществляется непосредственно при добавлении
  // свойств в объект, а во втором - перед созданием
  // объекта. Какой вариант предпочтительнее? Почему?
  // Есть ли более оптимальное решение данной функции?

  return result;
}
