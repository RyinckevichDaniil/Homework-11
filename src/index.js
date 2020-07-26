// Реализация метода .bind функцией

const user = {
    name: 'Oleg',
};
function info(surname, email) {
    console.log(this.name, surname, email);
}

// 1) реализовал функцию
// 2) Создал внутри функцию, поскольку метод .bind возвращает нам новую функцию при своем вызове
// 3) Реализацию будет проходить при помощи метода .apply, поскольку данный метод вторым параметров всегда принимает массив и сам его обрабатывает(Метод call не сможет так сделать)
// 4) Сформировал массив remainArg, который соединяет в себе разные параметры и который может получить оставшиеся аргументы в функции bind
// 5) Для того чтобы сформировать массив из псевдомассива возпользовался методом .call, в котором передал arguments и поскольку в этом объекте хранятся все оставшиеся(будущие) параметры функции bind, нам необходимо убрать первые два параметры функции bind
// 6) Передал массив remainArg в методе apply
// 7) Создал еще один массив args, в безымянной функции для того, чтобы получить все необходимые параметы данной функции
// 8) Соединил два массива remainArg и args при помощи метода .concat, для того, чтобы получить массив, который мы передаем вторым параметром метода .apply

function bind(fn, context) {
    const remainArg = Array.prototype.slice.call(arguments, 2)
    return function() {
        const args = Array.prototype.slice.call(arguments);
       return fn.apply(context, remainArg.concat(args));
    }
}



bind(info, user)('Petrov','OlegPetrov@ua.com'); 
bind(info, user, 'Petrov')('OlegPetrov@ua.com');
bind(info, user, 'Petrov','OlegPetrov@ua.com')();