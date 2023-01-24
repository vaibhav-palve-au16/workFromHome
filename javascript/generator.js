const name = ()=>"data 1"
const name1 = ()=> "vaibhav hello"
const name2 = ()=> "remaining here some "

function* simple(){
    let id = 1
    while(true){
        const incremnt = yield id
        if(incremnt != null){
            id +=incremnt 
        }
        else{ 
            id++
        }
    }
    
}
const obj = simple()
const obj1 = obj.next()
console.log(obj1);
const obj2 = obj.next()
console.log(obj2);
const obj3 = obj.next(10)
console.log(obj3);
const obj4 = obj.next()
console.log(obj4);
const obj5 = obj.next()
console.log(obj5);