'use strict'; // применение стандарта ES6 записывается в начале во всех JS файлах 

ar leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

//типы переменных 7 шт

var number = 5;  // число
var string = "Hello world"; //строка
var sym = Symbol(); // символ новый тип данных введен с новым стандартом
var boolean = true; // булево значение
null; //нал, когда в коде чего-то не существует 
undefined; // андефайнд, когда объект существует , но значения не имеет
var obj = {}; // объект
// let присвоение переменной 
console.log(4/0);
console.log('string'*9);

let person = {
    name: "Jone",
    age: 25,
    isMarried: false
};
console.log(person.name);

console.log(person["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

//alert('Hello World'); // по сути самое простое модальное окно

// let answer = confirm("Are you here?");

// console.log(answer); 

//let answer = prompt("Есть ли вам 18?", "ДА"); // модальное окно с вопросом

console.log(typeof(arr));  // проверека на типы данных 
// сложение строк
console.log("arr"+"-object");
console.log(5+"-object");

let incr = 10,  // переменные можно перечислять через "," (запятую)
    decr = 10;

    // префиксная форма возвращает измененное значение
//console.log(++incr);
//console.log(--decr);

    // посфиксная форма возвращает старое значение

//console.log(incr++);
//console.log(decr--);

// % возаращает остаток от деления 
    console.log(5%2);
    
// знак "=" обозначает присваивание
//let number = 5
// знак "==" проверка на равенство двух значений
//console.log("2"==2);
// знак "===" проверка на равенство двух типов данных
//console.log("2"===2);

let isChecked = true,
    isClosed = false;

console.log(isChecked && isClosed);  // && (оператор "и" возвращает правду когда все значения правдивы)
console.log(isChecked || isClosed);  // || (оператор "или" возвращает правду, когда хотя бы одно из значений правда)
console.log(isChecked || !isClosed); // ! - знак отрицания,меняет на противополжное значение












// Test for jokes
/* var joke = "JavaScript walked into a bar....";
var toldJoke = false;
var $punchline = "Better watch out for those semi-colons.";
var entage = 20;
var result
if (toldJoke == false) {
alert($punchline);
} else
alert (joke); */

/* var zipCode = 98104;
var joesFavoriteMovie = "Forbidden Planet";
var movieTicket$ = 8;
if (movieTicket$ >= 9) {
alert("Too much!");
} else {
alert("We're going to see " + "joe's Favorite Movie");
};
 */

//Цикл while 
/* var scoops = 2;
while (scoops > 0) {
document.write("Another scoop!<br>");
scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");
    if (scoops < 3) {
        alert("Ice cream is running low!");

 */
/* var name = "Joe";
var i = 0;
while (i < 2) {
document.write("Happy Birthday to you.<br>");
i = i + 1;
}
document.write("Happy Birthday dear " + name + ",<br>");
document.write("Happy Birthday to you.<br>"); */


/* var word = "bottles";
var count = 99;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
if (count > 0) {
    console.log(count + " " + word + " of beer on the wall.");
    } else {
    console.log("No more " + word + " of beer on the wall.");
    }
} */


