/**
 * Использование и переопределение стандартных методов
 */

// имеем упорядоченный массив чисел
const array = []
for (let i=0; i<10000001; i++) {
    array.push(i);
}

Array.prototype.mapping = function(callback) {
    const arrayToReturn = [];
    for (let item of this) {
        arrayToReturn.push(callback(item))
    }
    return arrayToReturn;
}

const standardMethod = function() {
    const resultArray = array.map(item => item * 2);
    console.log('standardMethod');
    return resultArray[resultArray.length - 1];
}

const customMethod = function() {
    const resultArray = array.mapping(item => item * 2);
    console.log('customMethod');
    return resultArray[resultArray.length - 1];
}



console.time();
console.log(standardMethod());
console.timeEnd();

console.time();
console.log(customMethod());
console.timeEnd();

// standardMethod
// 20000000
// default: 100.762ms
// customMethod
// 20000000
// default: 190.265ms