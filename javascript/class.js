class car {
    constructor(carName){
        this.carName = carName
        this.arr = []
    }
    display() {
        return this.carName
    }
    /**
     * @param {any} x
     */
    inserdata(x){
        return this.arr.push(x)
    }
    displayArr(){
        console.log(this.arr);
        return"hello"
    }
}
let name = new car('honda')
console.log(name.display());
name.inserdata("BMW")
name.inserdata("audi")
name.inserdata("F1")
console.log(name.displayArr());