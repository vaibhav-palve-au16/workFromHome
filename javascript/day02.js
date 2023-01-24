

// const person = {
//     name: "vaibhav",
//     last: "palve",
//     fullName: function callData() {
//         return console.log(`Hello ${this.name} ${this.last} `);
//     }
// }

// function callData() {
//     return console.log(`Hello ${this.name} ${this.last} `);
// }
// //call() function call argument 
// callData.call(person)


// //Apply() Functions this arragument , array object
// let array = [1, 2, 3, 4]
// let a = Math.max.apply(null, array)
// callData.apply(person)
// console.log(a);


// //bind() function is call when we pass argument as this value and object contain this key words
// let b = callData.bind(person)();

/*
 npm package ?
 sequavalize ORM Knex.js Objaction.js
hosting ?
clouser benefits 
1) Using private variables and methods 
2) Maintaining state between each function call
eg :- 
Data Encapsulation
With a function closure you can store data in a separate scope, and share it only where necessary.

If you wanted to emulate private static variables, you could define a class inside a function, and define
the private static vars within the closure:

(function () {
    var foo;
    foo = 0;
    function MyClass() {
        foo += 1;
    }
    MyClass.prototype = {
        howMany: function () {
            return foo;
        }
    };
    window.MyClass = MyClass;
}());

outer function variable we can access 

// scope function scope, block scope, globle scope

// === v/s ==

// HOF 

// this ?? 

// self invoke function  

//call apply bind 

// js curring 
eg : - function calculateVolume(length) {
        return function (breadth) {
            return function (height) {
                return length * breadth * height;
            }
        }
    }
    console.log(calculateVolume(4)(5)(6));

// node - run time envoriment plateform

// event loop  -- explain perfectly 

// call back function 

// call back hell  neasted call back 

// promise use kar ke prevent call back hell

// promise chain 

// neasted promise chain  

// sentecal sugar async await 

// middlerware 

//templet engine ejs, pug

// margin padding

// PostgreSQL 

// buffer 

// stream

// binary data 

//





// react ??

// real DOM v/s Vartual DOM

// Prop 

// hooks

// props drilling and avoid ??

// HOC

// class v/s function 
*/



var ubuf = Buffer.alloc(5);
var sbuf = new Buffer("GeeksforGeeks", "ascii");
console.log(sbuf);