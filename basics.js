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

// functions follow DRY - Dont Repeat Yourself
function avg(a, b){
    return (a+b)/2;
}
let c = avg(4,5);
console.log(c);
//Conditionals in JS 
if(x> 3){
    console.log("Hey you are above 3");
}else if(x>2){
    console.log("Hey your below 3");
}
else{console.log("You are greater than 1");}

//Loops (Same as Cpp)
let arr1 = [1,2,3,4,5, 6]
for(let i  = 0  ; i < arr1.length;i++){
    console.log(arr1[i]);
}
arr1.forEach(element => {  // Same as above for loop
    console.log(element);
});
let j = 0 ; 
while(j< arr1.length){
    console.log(arr1[j]);
    j++;
}
// Break and continue statements are the same as in  Cpp

//Array methods
let myArr = ["Fan", 'camera' , 45 , null, true];
console.log(myArr.length);
// myArr.pop();
myArr.push("Mine");
myArr.shift();
myArr.unshift("First ME") // Returns new array length after adding first me
console.log(myArr);
//arr.sort uses alhabetical sort

//String Methods in JavaScript
let myLovelyString = "Harry is a good boy good good";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good"));
console.log(myLovelyString.lastIndexOf("good"));
console.log(myLovelyString.slice(1,4)); // Sliced String
d = myLovelyString.replace("Harry"  , "Rohan");
console.log(d);


//JS Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours(),':',myDate.getMinutes());

//DOM Manipulation
let elem = document.getElementById('btn');
console.log(elem);
let elem1  = document.getElementsByClassName('container');
console.log(elem1);
// elem1[0].style.background = "yellow";
elem1[0].classList.add("bg-primary"); // Add classes to elemets
elem1[0].classList.add("text-col"); // can do remove also
console.log(elem1[1].innerText);
console.log(elem1[1].innerHTML);
tn  = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement)
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a bold paragraph";
tn[0].replaceChild(createdElement2,createdElement);