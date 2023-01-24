// hof is passing one or more functions as argument in another function and return function as a value
let data =  10
Number.prototype.sumdata = function(x){
    // console.log(x(this));
    return x(this);
}
let result = data.sumdata((x)=>x*10)
// console.log(result);

let number = [1,2,3,4,5]
let sum =0
let dt = number.forEach((e)=>{
    // console.log(e*20);
    e*10
})
// console.log(dt);


let array = [6,5,4,3,2]
let mapresult = array.map((e) =>{
  return e*2
})
console.log(mapresult);

let filterResult = array.filter((e) => {
  return e%2==0?e:0
})
console.log(filterResult);

let findArray = array.find((e)=>{
  return e==4?e:0
})
console.log(findArray);

let reduceArray = array.reduce((e,i,j)=>{
  console.log(e,i,j);
})

console.log(reduceArray);
/**
Higher-Order Functions(HoF): A function that takes another function(s)
as an argument(s) and/or returns a function as a value.

Callback Functions(CB): A function that is passed to another function.
 */