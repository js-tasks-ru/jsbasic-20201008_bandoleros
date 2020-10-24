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
  // Вариант 1
  let isLetters;
  for (let char of name) {
    let currentLetterCode = char.codePointAt(0);
    if ((currentLetterCode < 65)
      || (currentLetterCode > 90 && currentLetterCode < 97)
      || (currentLetterCode > 122)) {
      isLetters = false;
      break;
    } else {
      isLetters = true;
    }
  }

  return (!!name
    && (name.length >= 4)
    && !name.includes(" ")
    && isLetters);

  // Вариант 2
  // let strOfLetters = '';
  // for (let i = 65; i < 123; i++) {
  //   if (i > 90 && i < 97) {
  //     continue;
  //   }
  //   strOfLetters += String.fromCodePoint(i);
  // }

  // let isLetters;
  // for (let char of name) {
  //   if (strOfLetters.includes(char)) {
  //     isLetters = true;
  //   } else {
  //     isLetters = false;
  //     break;
  //   }
  // }

  // return (!!name
  //         && (name.length >= 4)
  //         && !name.includes(" ")
  //         && isLetters);
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
