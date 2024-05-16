//Task1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort((person1, person2) => person1.age - person2.age);
 console.log(people);

 //Task2
 function isPositive(num) {
    return num > 0;
 }
 function isMale(person) {
    return person.gender === 'male';
 }
 function filter(arr, ruleFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
 }
 console.log(filter([3, -4, 1, 9], isPositive));

 const human = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
 ];

 console.log(filter(human, isMale));

 //Task3
 function logCurrentDate(){
    console.log(new Date());
 }
 const intervalId = setInterval(logCurrentDate, 3000);
 setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
 }, 30000);

 //Task4
 function delayForSecond(callback) {
    setTimeout(callback, 1000);
 }
 delayForSecond(function () {
   console.log('Привет, Глеб!');
 })

//Task5
function delayForSecondTo(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecondTo(() => sayHi('Глеб'));
