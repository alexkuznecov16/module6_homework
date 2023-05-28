/* 
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

Используйте Arrow Function синтаксис.

Протестируйте функцию на любых значениях и выведите результат в консоль. */

const degree = (x,n) => {
    if (x >= 1 && n >= 1){
        console.log(x**n)
    } else{
        console.log('\nError! The number is not a natural\n');
    }
}
degree(2,2); // 4
degree(4,2); // 16
degree(0,10); // Error! The number is not a simple
degree(5,5); // 3125