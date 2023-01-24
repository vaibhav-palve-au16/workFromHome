//Method Chaining

function Calculator1() {
    let data = 0 
    this.add = function(x){
        data += x
        return this
    }
    this.sub = function(x){
        data-=x
        return this
    }
    this.mul = function(x){
        data*=x
        return this
    }
    this.div = function(x){
        data/=x
        return this
    }
    this.print=  function(){
        return data
    }
}
let data1  = new Calculator1()
console.log(data1.add(10).sub(2).mul(23).div(12).print());


class Calculator {
    constructor() {
        this.data = 0
    }
    add(x) {
        this.data += x
        return this
    }
    sub(x) {
        this.data -= x
        return this
    }
    mul(x) {
        this.data *= x
        return this
    }
    div(x)  {
        this.data /= x
        return this
    }
    print (){
        return data
    }
}
let data = new Calculator()
console.log(data.add(10).sub(2).mul(23).div(12).print().data);