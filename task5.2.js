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
        fromDate.setDate(fromDate.getDate() + 1);
        if (fromDate.getDate() == dateOfTheMonth && fromDate.getDay() == dayOfTheMonth) {
            countdays++;
        }
    } while (fromDate <= toDate);
    return countdays;
}

console.log(countFriday13(dateFrom, dateTo));