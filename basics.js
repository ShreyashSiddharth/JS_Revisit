//JS console API
console.log("Hello World");
// alert("me");
//document.write("This is doc write");
console.warn("Prints a Warning");
console.error("This prints an error on the console");
console.log("Another Log", 4 + 6, "this is");

//Js Variables
var x = 5;
var y = 6;
var z = x+y; console.log(z);  // Var was used before 2015 now let and const are used 
// Use const when values cant be changed
// Use const when type cant be changed Use let where you cant use const

let x2 = 20.0 ; 
let z2 = 10 ; console.log(x2+z2);// These DataTypes were numbers
//Other DataTypes can be objects or strings

let str1 = "Hello Guy"; let str2 = 'Hey man';
//Or objects
let marks = {
    ravi:39,
    shubham:78,
    nilesh:99.7
};

//Booleans
let a = true;
let b = false;
//Make an Undefined Variable
let und;
let und1 = undefined;
// Null  Variable
let n = null;

//Arrays
let arr = [1, 2, "name" , 4, 5];
//Operators:Arithmetic (Similar as CPP)
console.log("Add  - ", x+y); 
console.log("Subtract" , x-y);
console.log("Multiply" , x*y);
x+= y;
x -= y;
x++;
console.log(x);
x++;
//Comparison Operators

console.log(x == y);
console.log(x>= y);
console.log(x<= y); // Or use > , < only
//Logical Operators
console.log(true && false);
console.log(true || false);
console.log(!true);
