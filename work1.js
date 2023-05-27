/* 

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис. */

let myArray = [true, 1, false, 'Number', 2,9,10,20,30]
let countOfEven = 0;
let countOfNotEven = 0;

function arrayCheck(myArray){
    for (item of myArray){
        if (typeof(item) === 'number'){
            if (item % 2 === 0){
                countOfEven += 1;
            } else {
                countOfNotEven += 1;
            }
        } else{
            console.log(`${item} it's not a number`)
        }
    } 
    
    console.log(`Zero item = ${myArray[0]}`)
    console.log(`Even count of numbers = ${countOfEven}`)
    console.log(`Not even count of numbers = ${countOfNotEven}`)
}

arrayCheck(myArray);