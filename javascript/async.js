let array = [2, 3, 4, 5]
let sum = Math.max.apply(null,array)
console.log(sum);

let names = {
    name:"vaibhav",
    last:"palve",
}
function displayName() {
    return this.fullName = `${this.name} ${this.last}`
}
let name2 = displayName.call(names)
// let name1 = displayName.bind(names)()
// console.log(name1);
console.log(name2);
console.log(names);