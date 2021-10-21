function foo(fn) {
    setTimeout(() => {
        console.log('foo callback');
        fn();
    }, 400);
}

//foo(() => console.log('outer callback'));

/*
нужен кода который выведет "начало работы" и дата (new Date) с точностью до секунды или выше, 
     через 4 секунда выведет "Обед" и дату с точностью до секунды
     через 5 секунд выведет "конец работы" и дату с точностью до секунды
*/
function workingDay() {
    console.log('Начало работы: ', new Date());
    setTimeout(() => {
        var dateStart = new Date();
        console.log('Обед: ' + new Date());
        setTimeout(() => console.log('Конец работы: ', new Date()), 5000);
    }, 4000);
}
//workingDay();
/**
 * запустить счетчик который будет увеличиваться на 1 каждую секунду и писать в консоль
 */

function iterator(i) {
    setInterval(() => console.log(i++), 1000);
}
//iterator(5);

/**
 * - написать код который напишет Hello , 
   через рандомный промежуток времени прибавит World и напишет Hello World 
   через рандомный промежуток времени прибавит ", I'm@ и напишет Hello World, I'm
   через рандомный промежуток времени прибавит  here и напишет Hello World, I'm here 
   текст передавать как параметер колбэка, максимальное время ожидания 5 сек
 */

function writer(timeout, text, callback) {
    var timeout = (Math.random() * 5) * 1000;
    setTimeout(() => {
        process.stdout.write(text + ' ');
        if (callback) callback(text)
    }, timeout);
}
process.stdout.write('Hello ');
writer('World');
writer('I\'m');
writer('here');