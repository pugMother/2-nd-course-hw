//Task1

let password = 'Пароль';
let userPass = prompt('Введите пароль');
if (userPass === password) {
    alert('Пароль верный');
} else {
    alert('Пароль неверный');
}


//Task2

let c = prompt('Введите число от 0 до 10');
let isOK = (c > 0 && c < 10) ? 'Верно' : 'Неверно';
console.log(isOK);


//Task3

let d = prompt('Введите первое число');
let e = prompt('Введите второе число');
if(d > 100 || e > 100) {
    console.log('Верно');
}  else {
    console.log('Неверно');
}

//Task4

let a = '2';
let b = '3';
alert(Number(a) + Number(b));


//Task5

let monthNumber = Number(prompt('Введите число месяца'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('Упс, что-то не то');
        break;
}