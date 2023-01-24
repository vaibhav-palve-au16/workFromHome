// call : - object attached or refer to function we can add and return any this value in call function 
var name = {
    firstName:"vaibhav",
    lastName:"Palve",
    age:25
}

let person = {

}
function getEmail(){
    return this.email =`${this.firstName}.${this.lastName}@gmail.com`
}
function makeEmail(n,m,num){
    console.log(n,m, num);
    return this.email =`${n}.${m}+${num}@gmail.com`
}
function addNumber(number){
    return this.phoneNumber = number
}
function updateAge(x){
    console.log(x);
    return this.age = x
}
//call : - object refer to function 
let getData = getEmail.call(name)
let getData1 = addNumber.call(name, 7776090314)
console.log(name);

//bind - return function when we bind function 

let updated =  updateAge.bind(name, 22)()
console.log(name);
//apply : - first arg ment is this variable or object 2nd arg is array 
let bindData = makeEmail.apply(person, ["peter", 'pal', [1233]])
console.log(person);