// Primitive 

// Primitive datatype are 'call by value'

// 7 types of primitive data types in JavaScript. 
// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

//const str = "Hello World"; // String;
// We do not define language in JavaScript.
// JavaScript is a dynamic language.

const id = Symbol("id");
const anotherId = Symbol('id');

console.log(id === anotherId);

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);



// Reference (non-primitive)

// Reference datatype are 'call by reference'

// 1. Array
// 2. Objects
// 3. Functions



const heros = ["Superman", "Batman", "Flash", "Aquaman"];
let myObj = {
    name: "Bruce Wayne",
    age: 45,
    city: "Gotham",
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction);

// Return type of variable in javascript.
/*
Premitive data types
1. string =string;
2. number = number; 
3. boolean = boolean;
4. null = objet;
5. undefined = undefind;
6. bigint = bigint;
7. symbol = symbol; 
*/
/*
Nonpremitive datatypes
1. array= object;
2. object = object;
3. function = function;
*/