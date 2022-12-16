/**
 * Области видимости и переменные
 */

// глобальные переменные
// занимает ячейку памяти до исполнения кода
var global1 = 1;
var globalOriginValue = 2;

// занимают память в процессе, не инициализируются до объявления
let global2 = 2;

// не позволяет менять значение, но позволяет менять объект по ссылке
const global3 = 3;

// getPowDeclaration(2);
// getPowExpression(2); // Error

// занимает ячейку памяти до исполнения кода, но доступна для выполнения до объявления
function getPowDeclaration(argument) {

    // переопределили глобальную переменную
    globalOriginValue = 1;
    return Math.pow(argument + globalOriginValue, this.originValue)
}

// занимает память в процессе, но не доступна для выполнения до объявления
const getPowExpression = function(argument) {
    return Math.pow(argument + globalOriginValue, this.originValue);
}

// лямбда
const getPowLambda = (argument) => Math.pow(argument, this.originValue);

const object = {
    originValue: 3,
    getPowDeclaration,
    getPowExpression,
    getPowLambda
}

console.log(object.getPowDeclaration(2)); // ожидаем 27, получаем 27
console.log(object.getPowExpression(2)); // ожидаем 64, получаем 27
console.log(object.getPowLambda(2)); // ожидаем 8, получаем NaN

// область видимости блока
const getSummTemplate = function(arg) {
    var arg1 = arg;
    let arg2 = 2;
    if (arg === 5) {
        var arg1 = 0;
        let arg2 = 0;
        console.log('message', arg1, arg2);
    }
    return arg1 + arg2;
}

console.log(getSummTemplate(5)); // ожидаем 7, получаем 2

// переменные-значения
let arg1 = 5;
let arg2 = arg1;
arg1 = 10;
console.log(arg2) // ожидаем 5, получаем 5

// переменные-ссылки
let arg3 = [1, 2, 3];
let arg4 = arg3;
arg3.pop();
console.log(arg4); // ожидаем [1, 2, 3], получаем [1, 2]