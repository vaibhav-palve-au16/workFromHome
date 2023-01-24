// it is accessing outer function varable or lexical scope variable to inner function as reference varable 

// let name1 = "vaibhav "
// function namedisplay(){
//     function name(name1){
//         console.log(name1);
//         return (`name is ${name1}`)
//     }
//     return name(name1)
// }
// console.log(namedisplay())

//another examle

const array = [1,2,3,4,5]
function sum (array) {
    // console.log(array);
    for(let i = 0; i < array.length; i++){
        setTimeout(()=>{
            console.log(i, array[i])
        }, 1000)
    }
}

sum(array)

// Global scope variable we can access 

// const num1 = 2
// function add(num){
//     return function add1(a){
//         return function add2(b){
//             return function add3(c){
//                 return function add4(d){
//                     return num + a + b + c + d
//                 }
//             }
//         }
//     }
// }
// let sum = add(num1)
// let add1 = sum(3)
// let add2 = add1(4)
// let add3 = add2(5)
// let add4 = add3(8)
// console.log(add4);