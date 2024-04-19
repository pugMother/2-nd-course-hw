//Task1
//let first = Number(prompt('Найдём меньшее из чисел. Введите первое число'));
//let second = Number(prompt('Введите второе число'));
//let minNum = function(first, second){
//    if (first < second) {
//        console.log(`Первое число меньше. Оно равно ${first}`);
//        return first;
//    } else if(first === second) {
//        console.log(`Числа равны со значением ${first}`);
//        return first;
//    } else {
//        console.log(`Второе число меньше. Оно равно ${second}`);
//        return second;
//    }
//}
//minNum(first,second);

//Task2
//let num = Number(prompt('Введите число, проверим чётное ли оно'));
//let isEven = function(x) {
//    if (x % 2 == 0) {
//        console.log(`Число ${x} чётное`);
//        return x;
//    } else {
//        console.log(`Число ${x} нечётное`);
//        return x;
//    }
//}
//isEven(num);

//Task3
//let numb = Number(prompt('Возведём число в квадрат'));
//let exponentiation = function(x) {
//    x **= 2;
//    console.log(`Получим ${x}`);
//    return x;
//}
//let expNum = exponentiation(numb);

//Task4
//let years = Number(prompt('Сколько вам лет?'));
//let isYoung = function(x) {
//    if (x < 0) {
//        console.log('Вы ввели неправильное значение');
//    } else if (x >= 0 && x <= 12) {
//        console.log('Привет, друг!');
//    } else {
//        console.log('Добро пожаловать!');
//    }
//}
//isYoung(years);

//Task5
//function multiplyNumbers(a, b) {
//    if (isNaN(a) || isNaN(b)) {
//        return 'Одно или оба значения не являются числом'
//    } else {
//        return a * b
//    }
//}

//Task6
//function getCube() {
//    let num = Number(prompt("Введите число"))

//    if (isNaN(num)) {
//        return 'Переданный параметр не является числом'
//    } else {
//        return `${num} в кубе равняется ${num ** 3}`
//    }
//}

//Task7
//function getArea() {
//    return Math.PI * this.radius ** 2
//}
//function getPerimeter() {
//    return 2 * Math.PI * this.radius
//}
//const circle1 = {
//    radius: 3,
//    getArea,
//    getPerimeter,
//}
//const circle2 = {
//    radius: 5,
//    getArea,
//    getPerimeter,
//}

//Task8
let mounthGame = function(el) {
    let monthNumber = Number(prompt('Введите число месяца'));
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
        default:
            alert('Недопустимое число');
            break;
    }
}