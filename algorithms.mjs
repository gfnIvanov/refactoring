/**
 * Замена алгоритмов
 */

// имеем упорядоченный массив чисел
const array = []
for (let i=0; i<1000001; i++) {
    array.push(i);
}

/**
 * before
 */
const findValueInArray = function(value) {
    let result = false;
    for (let item of array) {
        if (value === item) {
            result = true;
            break;
        }
    }
    console.log('findValueInArray');
    return result;
}


/**
 * after
 */
 const binaryFindValueInArray = function(value) {
    let result = false;
    let middle = Math.floor(array.length / 2);
    let part = [];
    if (value === array[middle]) return true;
    if (value < array[middle]) {
        part = array.slice(0, middle);
    } else if (value > array[middle]) {
        part = array.slice(middle, array.length + 1);       
    } else {
        return false;
    }
    if (value === Math.floor(part.length / 2)) return true;
        for (let item of part) {
            if (value === item) {
                result = true;
                break;
            }
        }
    console.log('binaryFindValueInArray');
    return result;
}


console.time();
findValueInArray(999900);
console.timeEnd();

console.time();
binaryFindValueInArray(999900);
console.timeEnd();

// findValueInArray
// default: 22.077ms
// binaryFindValueInArray
// default: 7.161ms

// Временная сложность бинарного поиска составляет O (log 2 n), где n - количество элементов в массиве. 
// Это намного лучше по сравнению с линейным поиском, который имеет временную сложность O (n)

