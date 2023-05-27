/* 
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы. */

function getSimpleNum(number){
    if (number >= 1 && number <= 1000){
        console.log(`Number (${number}) is simple.\n`);
    } else if (number > 1000){
        console.log(`Error! The number (${number}) cannot be more than 1000.\n`);
    } else{
        console.log(`Error! The number (${number}) is not simple, because it is less than 1.\n`);
    }
}

getSimpleNum(10); // Number (10) is simple.
getSimpleNum(1000); // Error! The number (10000) cannot be more than 1000.
getSimpleNum(-12); // Error! The number (-12) is not simple, because it is less than 1.