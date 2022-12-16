/**
 * Устранение дублированиея кода и принцип DRY
 */

/**
 * before
 */
const powWithString = function(string) {
    let number;

    // switch
    switch (string) {
        case ('zero'):
            number = 0;
            break;
        case ('one'): 
            number = 1;
            break;
        case ('two'):
            number = 2;
            break;
        case ('three'):
            number = 3;
            break;
        case ('four'):
            number = 4;
            break;
        case ('five'):
            number = 5;
            break;
        default:
            number = -1;
            break;
    }

    // нестрогое сравнение
    // не обрабатываются исключительные ситуации
    if (number != -1 && number >= 0 && number <= 5) {

        // дублирование функциональности
        if (number == 0) {
            return 'Income value: ' + string + '; Warning: value is zero! Result: ' + Math.pow(number, 2);
        }
        return 'Income value: ' + string + '; result: ' + Math.pow(number, 2);

        // недостижимый код
        console.log('done!');
    }
}

const powWithNumber = function(number) {
    let string;

    // switch
    switch (number) {
        case (0):
            string = 'zero';
            break;
        case (1): 
            string = 'one';
            break;
        case (2):
            string = 'two';
            break;
        case (3):
            string = 'three';
            break;
        case (4):
            string = 'four';
            break;
        case (5):
            string = 'five';
            break;
        default:
            string = -1;
            break;
    }

    // нестрогое сравнение
    // не обрабатываются исключительные ситуации
    if (string != -1 && number >= 0 && number <= 5) {

        // дублирование функциональности
        if (number == 0) {
            return 'Income value: ' + string + '; Warning: value is zero! Result: ' + Math.pow(number, 2);
        }
        return 'Income value: ' + string + '; result: ' + Math.pow(number, 2);

        // недостижимый код
        console.log('done!');
    }
}


const needPow = function(value) {
    if (typeof value === 'string') {
        console.log(powWithString(value));
    } else if (typeof value === 'number') {
        console.log(powWithNumber(value));
    } else {
        console.error('Invalid value type');
    }
}

needPow(5);





/**
 * after
 */
const powWithAny = function(incomeArgument) {
    const decodeValues = new Map([
        ['zero', 0],
        ['one', 1],
        ['two', 2],
        ['three', 3],
        ['four', 4],
        ['five', 5],
    ]);
    let resultString;
    let resultNumber;

    // вернет true в том числе в случае, когда число передано в виде строки
    if (!isNaN(incomeArgument)) {

        // завершаем выполнение, если аргумент не удовлетворяет условиям
        if (+incomeArgument < 0 || +incomeArgument > 5) return new Error('Invalid value type');

        resultNumber = +incomeArgument;
        
        // пример с forEach ниже (нельзя прервать)
        for (let iter of decodeValues) {
            if (+incomeArgument === iter[1]) {
                resultString = iter[0];
                break;
            }
        }
    } else {
        resultNumber = decodeValues.get(incomeArgument);

         // завершаем выполнение, если аргумент не найден
        if (!resultNumber) return new Error('Invalid value type');

        resultString = incomeArgument;
    }
    return calculate(resultNumber, resultString);
}

const calculate = function(argumentNum, argumentStr) {
    const insertBetween = argumentNum === 0 ? 'Warning: value is zero! Result' : 'result';
    return `Income value: ${argumentStr}; ${insertBetween}: ${Math.pow(argumentNum, 2)}`
}

const bestNeedPow = function(value) {
    try {
        const result = powWithAny(value);
        if (result instanceof Error) {
            throw result;
        } else {
            console.log('done!');
            console.log(result);
        }
    } catch (err) {
        console.error(err);
    }
}

bestNeedPow(5);



/**
decodeValues.forEach((key, value) => {
    if (incomeArgument === value) {
        resultArgument = key;
    }
});
 */