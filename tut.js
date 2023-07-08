//JS used in React

// 1.Arrow Function Instead of Normal Ones
// Easy to export

const DoSomething = (x,y) =>{
    console.log("Arrow Function",x+y);
}

// 2.Anonymous Functions
<button onClick={()=>{console.log("clicked")}}></button>

//3.Ternary Operators
let age = 18;
let name = age > 10 ? "Pedro" : "Jack";

const Component =() =>{
    return age > 10 ? <div>Pedro</div>  : <div>Jack</div>
}

// 4. Destructuirng Objects
const person ={
    name1:'Pedro',
    age1:20,
    isMarried:false,

};

const {name1, age1 , isMarried} = person;

//All variables can be used outside the object now

//5.Spread Operator
//Everything remains same as person object and name gets changed
const person2 = {...person, name:"Jack"};
//In arrays this operator builds new array adding some new elements 
const arr = ["Pedro" , "jack", "Jessica"];
const arr2 = [...arr, "Jhon"];

//Remaining from Map , Filter , Reduce
//.map() , .filter() , .reduce()
arr.map((name) =>{
return name+"1"   //Adds 1 to all array elements
});
arr.filter((name) =>{
    return name !== "Pedro1"; // Filters and keeps those names only which arent Pedro1
});