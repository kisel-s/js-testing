/*
Напишите код который будет разбивать число на заданное количество рандомных чисел
сумма которых будет равна изначальному числу.
Пример: разбить 15 на 4 части (сумма четырех чисел будет равна 15) (4,6,5)
а) числа изначальное число целое, числа разбивки - целые (4,6,5)
*/

function splitOnRandomNumber(number, parts) {
    var result = [];
    for (let i = parts; i > 1; i--) {
        let randomValue = Math.floor(Math.random() * (number - i + 1) + 1);
        number -= randomValue;
        result.push(randomValue);
    }
    result.push(number);
    return result;
}

console.log(splitOnRandomNumber(20, 7));

/*
3) Напишите код который будет разбивать число на заданное количество рандомных чисел
сумма которых будет равна изначальному числу. Пример: разбить 15 на 4 части (сумма четырех чисел будет равна 15) (4,6,5)
б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
*/
var toFixedValue = 2;
function splitOnRandomFloatNumber(number, parts) {
    var result = [];
    for (let i = parts; i > 1; i--) {
        let randomValue = ((Math.random() * (number - i + 1) * 100 + 1) / 100).toFixed(toFixedValue);
        number -= randomValue;
        result.push(randomValue);
    }
    result.push(number.toFixed(toFixedValue));
    return result;
}

console.log(splitOnRandomFloatNumber(20, 7));

/**
 * Возвращает массив, где parts - количество целочисленных элементов, number сумма элементов массива
 * @param {*} number 
 * @param {*} parts 
 * @returns 
 */
function splitOnEqualNumber(number, parts) {
    var result = Array.from({ length: parts }, x => Math.floor(number / parts));
    let reminder = number % parts;
    while (reminder > 0) {
        result.forEach((item, index) => {
            if (reminder > 0) {
                result[index] = item + 1;
                reminder--;
            }
        });
    }
    return result;
}

console.log(splitOnEqualNumber(15, 4));

/**
 * Возвращает массив, где parts - количество целочисленных элементов, number сумма элементов массива
 * @param {*} number 
 * @param {*} parts 
 * @returns 
 */
function splitOnEqualNumberAnother(number, parts) {
    var  quotient = Math.round(number / parts);
    var result = [];
    for (let i = parts; i > 1; i--) {
        let randomValue = Math.round(Math.random() + quotient - 1);
        number -= randomValue;
        result.push(randomValue);
    }
    result.push(number);
    return result;
}

console.log(splitOnEqualNumberAnother(15, 4));

/**
 * Возвращает массив, где parts - количество дробных элементов, number сумма элементов массива
 * @param {*} number 
 * @param {*} parts 
 * @returns 
 */
function splitOnEqualFloatNumber(number, parts) {
    var  quotient = Math.round(number / parts);
    var result = [];
    for (let i = parts; i > 1; i--) {
        let randomValue = (Math.random() + quotient - 1).toFixed(toFixedValue);
        number -= randomValue;
        result.push(randomValue);
    }
    result.push(number.toFixed(toFixedValue));
    return result;
}

console.log(splitOnEqualFloatNumber(15, 4));