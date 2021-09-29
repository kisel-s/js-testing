/*
Высчитать как много Пятниц 13-ого было с 01/01/2000 до сегодня. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )
*/
var dateFrom = new Date(2000, 0, 1);
var dateTo = new Date();

function countFriday13(fromDate, toDate) {
    var countdays = 0;
    const dayOfTheMonth = 5;
    const dateOfTheMonth = 13;
    do {
        dateFrom.setDate(dateFrom.getDate() + 1);
        if (dateFrom.getDate() == dateOfTheMonth && dateFrom.getDay() == dayOfTheMonth) {
            countdays++;
        }
    } while (dateFrom <= dateTo);
    return countdays;
}

console.log(countFriday13(dateFrom, dateTo));
