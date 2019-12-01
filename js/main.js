const digit1 = prompt("Введите имя!");
console.log(`Привет, ${digit1}!`);

const digit2 = prompt('Введите год вашего рождения!');
const myBirthday = (2019 - digit2);
console.log(`Вам ${myBirthday} лет!`);

const digit3 = prompt('Введите длину стороны квадрата!');
console.log(digit3 * 4);

const digit4 = prompt('Введите радиус окружности!');
console.log(digit4 * 3.1415 * 2);

const digit5 = prompt('Введите расстояние в км между двумя городами!');
const digit55 = prompt('Введите за сколько часов!');
const speed = (digit5 / digit55)
console.log(`${speed} км в час`);


const digit6 = prompt('Введите сумму долларов!');
console.log(digit6 * 0.9083);

const digit7 = prompt('Введите объем флешки в Гб!');
const flashDriveMB = (digit7 * 1024)
const quantityFiles = Math.trunc(flashDriveMB / 820)
console.log(`${quantityFiles} файлов помещается на флешку`);

const digit8 = prompt('Введите сумму денег!');
const digit9 = prompt('Введите цену шоколадки!');
const quantityChocolates = Math.trunc(digit8 / digit9)
console.log(`${quantityChocolates} шоколадок можно купить и не знаю сколько сдачи осталось`);


// const digit10 = +prompt('введите трехзначное число', 100);
// const step1 = digit10 % 3;
// const step2 = digit10 % 7;
// const step3 = digit10 % 10;
// console.log(step3 + '' + step2 + '' + step1);