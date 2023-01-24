//A callback is a function passed as an argument to another function.
// curring also define we provide multi arg in function (arg1, arg2,....)


function sum (a,b, div) {
    let n1 = 10
    return  b(a, n1, div)
}
function add(c, e, div){
    return [div(c,e), c+e]
}
function div (c,e){
    return c/e
}
console.log(sum(2,  add, div));