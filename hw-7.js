//Task1
let str = 'js';
str = str.toUpperCase();
console.log(str);

//Task2//
function getElOfStr(array,str) {
    return array.filter(el => el.toLowerCase(str).startsWith(str));
}
console.log(getElOfStr(['ЗаВтрак', 'тРуБА', 'зАкаЗ', 'заКАт', 'кАбель'], 'за'));

//Task3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Task4
let nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

//Task5
function randomOneToTen(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomOneToTen(0, 10));

//Task6
function generateRandomArr(num) {
    let randomArr = [];
    for (let i = 0; i < num/2; i++) {
        randomArr.push(Math.floor(Math.random() * num));   
    }
    return randomArr;
}
let result = generateRandomArr(12);
console.log(result);

//Task7
function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numberInRange = randomNumberInRange(3, 15);
console.log(numberInRange);

//Task8
let actualDate = new Date();
console.log(actualDate);

//Task9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//Task10
function formatDate(date) {
    let days = ["Воскресенье", "Понедельник", "Среда", "Четверг", "Пятница", "Суббота"];
    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(formatDate(new Date()));

//Task11
let fruits = function() {
let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);
let firstGuess = prompt("Введите первое слово");
let lastGuess = prompt("Введите последнее слово");
if (firstGuess === fruits[0] && lastGuess === fruits[fruits.length - 1]) {
    alert("Поздравляем, вы угадали оба слова!");
} else if (firstGuess === fruits[0] || lastGuess === fruits[fruits.length - 1]) {
    alert("Вы были близки к победе!")
} else {
    alert("Вы проиграли.")
}
}