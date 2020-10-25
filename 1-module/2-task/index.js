/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  let isLetters;
  for (let char of name) {
    let currentLetterCode = char.codePointAt(0);
    let isLatinUppercase = (currentLetterCode > 64) && (currentLetterCode < 91);
    let isLatinLowercase = (currentLetterCode > 96) && (currentLetterCode < 123);

    if (isLatinUppercase || isLatinLowercase) {
      isLetters = true;
    } else {
      return false;
    }
  }

  return (!!name
    && (name.length >= 4)
    && !name.includes(" ")
    && isLetters);
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
