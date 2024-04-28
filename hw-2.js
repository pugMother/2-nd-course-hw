// Task1
//let a = 10;
//alert(a);
//a = 20;
//alert(a);

// Task2
//let firstIphone = 2007;
//alert(firstIphone);

//Task3
//let JSfounder = 'Brendan Eich';
//alert('Язык JavaScript основал ' + JSfounder);

//Task4
//let useNumber1 = 10;
//let useNumber2 = 2;
//alert('Сумма чисел равна' + (useNumber1+useNumber2));
//alert('Разность чисел равна' + (useNumber1-useNumber2));
//alert('Произведение чисел равно' + (useNumber1*useNumber2));
//alert('Частное равно' + (useNumber1/useNumber2));

//Task5
//let useNumber5 = 2;
//let result = 2**5;
//alert('2 в 5-й степени равен ' + result);

//Task6
//let a = 9;
//let b = 2;
//let result = 9 % 2;
//alert('Остаток от деления равен ' + result);

//Task7
//let num = 1;
//num += 5;
//num -= 3;
//num *= 7;
//num /= 3;
//num++;
//num--;
//alert(num);

//Task8
//let age = Number(prompt('Сколько Вам лет?'));
//if([1, 21, 31, 41, 51, 61, 71, 81, 91, 101].includes(age)) {
//    alert('Вам ' + age + ' год.');
//} else if([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94, 102, 103, 104].includes(age)) {
//    alert('Вам ' + age + ' годa.');
//} else {
//    alert('Вам ' + age + ' лет.');
//    }

//Task9
//let user = {
//    age: 7,
//    name: 'Vasiliy',
//    isAdmin: true
//}

//user.cityOfResidence = 'Moscow';
//console.log(user);

//user.age = 17;
//console.log(user);

//delete user.cityOfResidence;
//console.log(user);

//let info = prompt('Какую информацию хотите узнать о пользователе?');
//if(info == 'age') {
//    alert(`Возраст ${user.age}`);
//} else if (info == 'name') {
//    alert(`имя ${user.name}`)
//} else if (info == 'isAdmin') {
//    if(user.isAdmin == true) {
//        alert('Пользователь является админом.');
//    } else {
//        alert('Пользователь не админ.');
//    }
//} else {
//    alert('Такой информации нет.')
//}

//Task10
//let name = prompt('Как Ваше имя?');
//alert(`Привет, ${name}!`);