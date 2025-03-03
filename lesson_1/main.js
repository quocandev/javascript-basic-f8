// Kiểu dữ liệu trong JS

// 1. Kiểu dữ liệu nguyên thủy (Primitive data types)
// - Number: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// - String: 'Hello', 'Hi', 'Goodbye'
// - Boolean: true, false
// - Undefined: undefined
// - Null: null
// - Symbol

// 2. Kiểu dữ liệu phức tạp (Complex data types)
// - Object: {name: 'Teo', age: 10}
// - Function: function() {}


//Number type
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof a);

//String type
var fullName = 'Quoc An \'s';
console.log(fullName);
console.log(typeof fullName);

//Boolean type
var isSuccess = true;

//Undefined type
var age;

console.log(age);

//Null type
var isNull = null;
console.log(isNull);

//Symbol type
var id = Symbol('id'); //unique
var id2 = Symbol('id');

console.log(typeof id);

//Function type
var myFunction = function () {
    alert('Hi');
}
myFunction();

//Object type
var myObject = {
    name: 'An',
    age: 21,
    address: 'Ha Noi',
    myFunction: function () {
        alert('Hello');
    }
};

console.log(myObject);

var myArray = [
    'JS',
    'PHP',
    'Ruby'
];

console.log(myArray);

