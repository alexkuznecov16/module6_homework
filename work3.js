/* 
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. */

function a(num_A){
    return function b(num_B){
        return num_A + num_B;
    }
}

let numAdding = a(10); // argument for first(a) function
let result = numAdding(5); // argument for first function in function (a)

console.log(result); // 15