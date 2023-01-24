let array = [1,2,3,4]
let setList = new Set(array)
setList.entries()
console.log(setList);


let a = "name"
let b ="last"
let mapObject = new Map([[a,'a'],[b,'b']])
mapObject.set("number", "123")
console.log([...mapObject.values()]);