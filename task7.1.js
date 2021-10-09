//1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
var toGetArrayReversed = [1, 2, 3, 4, 5, 6];

function getArrayReversed(array) {
    return array.reverse();
}
console.log("Source array is [" + toGetArrayReversed + "]. Reversed array [" + getArrayReversed(toGetArrayReversed) + "]");

//2) найти максимальное значение числа в массиве ([3,67,15...])
var toGetMaxValueArray = [3, 67, 15, 199];

function getMaxValueFromArray(array) {
    return Math.max.apply(null, array);
}
console.log("Maximum value from array [" + toGetMaxValueArray + "] is '" + getMaxValueFromArray(toGetMaxValueArray)) + "'";

//3) записать в массив ряд фибаначи начиная с N члена с длинной массива M
function getFibonachchiArray(n, m) {
    var result = [];
    for (let i = 1; i <= m; i++) {
        if (i >= n) {
            result.push(fib(i));
        }
    }
    return result;
}

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(getFibonachchiArray(3, 8));

//5) сортировка массива по возрастанию/убыванию
let a = [4, 2, 5, 1, 3];

function sortArrayAcs(array) {
    var result = [];
    return result = array.sort(function (a, b) {
        return a - b;
    });
}
console.log("Sorted array in ascending order - [" + sortArrayAcs(a) + "]. Source array is [" + a + "]");

function sortArrayDesc(array) {
    var result = [];
    return result = array.sort(function (a, b) {
        return b - a;
    });
}
console.log("Sorted array in descending order - [" + sortArrayDesc(a) + "]. Source array is [" + a + "]");