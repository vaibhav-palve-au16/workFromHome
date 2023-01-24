let redius = [1, 2, 3, 4]

Array.prototype.arrea = function()
{   console.log(redius);
    let result = []
    for (let index = 0; index < redius.length; index++) {
        const element = redius[index];
        result[index] = 2* 3.14 * element *element
    }
    return result;
}

console.log(redius.arrea())