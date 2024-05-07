//Task1
const arr1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] === 10) {
    console.log(arr1[i]);
    break;
  }
  console.log(arr1[i]);
}

//Task2
const arr2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(i)
    }  
}

//Task3
const arr3 = [1, 3, 5, 10, 20];
const joinArr3 = arr3.join(' ');
console.log(joinArr3);

//Task4
const arr4 = [];
for (let i = 0; i < 3; i++) {
    arr4[i] = [];
    for (let j = 0; j < 3; j++) {
        arr4[i][j] = 1;   
    }
}
console.log(arr4);

//Task5
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//Task6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort().pop();
console.log(arr6);

//Task7
arr7 = [9, 8, 7, 6, 5];
let userNum = Number(prompt('Угадай загаданное число'));
if (arr7.includes(userNum)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}

//Task8
let arr8 = 'abcdef';
arr8 = arr8.split('').reverse().join('');
console.log(arr8);

//Task9
const arr9 = [[1, 2, 3],[4, 5, 6]];
const newArr9 = arr9.flat();
console.log(newArr9);

//Task10
const arr10 = [];
let summ = [];
let l = 0;
for(var i = 0; i < 15; i++) {
    arr10.push(Math.floor(Math.random()*11));
}
console.log(`Сгенерированный массив: ${arr10}`);
for(let i = 0; i < arr10.length; i++) {
    if (i < arr10.length - 1) {
        summ[l] = arr10[i] + arr10[i + 1];
        console.log(`Сумма элементов ${i} и ${i+1}  равна ${summ[l]}`);
        l++;
    } else {
        console.log(`Последний элемент равен ${arr10[i]}`);
    }
}

//Task11
const arr11 = [];
for (let i = 0; i < 10; i++) {
    arr11.push(Math.floor(Math.random()*16));    
}
console.log(`Сгенерированный массив: ${arr11}`);
let getSquaredNumbers = function(array) {
    const newArr11 = array.map(per => per ** 2);
    return newArr11;
}
console.log(`Полученный массив: ${getSquaredNumbers(arr11)}`);

//Task12
function wordLengths(arr) {
    return arr.map(word => word.length);
  }
const arr12 = ["movie", "walks", "homework", "job", "immortality"];
let lengths = wordLengths(arr12);
console.log(lengths);

//Task13
const arr13 = [5, 8, -2, -564, 4, -792, -21, 111];
let negativeNumbers = function(arrNum) {
    negativeArr13 = arrNum.filter(num => num < 0);
    return negativeArr13;
}
console.log(negativeNumbers(arr13));

//Task14
const arr14 = [];
const newArr14 = [];
let k = 0;
for(var i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random()*11));
}
console.log(`Исходный массив: ${arr14}`);
for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 !== 0) {
        continue;
    } else {
        newArr14[k] = arr14[i];
        k++;
    }
}
console.log(`Новый массив: ${newArr14}`);

//Task15
const arr15 = [];
for(var i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random()*11));
}
console.log(`Сгенерированный массив: ${arr15}`);
const sum = arr15.reduce((total, number) => total + number, 0);
let midNum = sum / arr15.length;
console.log(`Среднее арифмитическое: ${midNum}`);