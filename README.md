# module6_homework
# Exercise 1
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

## array and variables
В самом начале я создал массив с разными значениями, а также создал 2 переменные которые в самом конце будут выводить сохранившийся результат. К примеру в countOfEven будет находиться количество чётных чисел, а в countOfNotEven количество нечётных чисел.
```
let myArray = [true, 1, false, 'Number', 2,9,10,20,30]
let countOfEven = 0;
let countOfNotEven = 0;
```

## function creating
После объявления основных переменных для нашей программы мы начинаем нашу функцию с именем arrayCheck которая в качестве параметра будет принимать массив ранее созданный.
```
function arrayCheck(myArray){
}
```

## for-of cycle creating
Функция внутри себя будет содержать цикл for-of, который будет перебирать каждый item в массиве.
```
function arrayCheck(myArray){
    for (item of myArray){
        // code
    }
}
```

## item checking
Здесь вы можете заметить, что после каждого перебирания item-a с помощью for-of цикла мы будем проверять элемент на то, является ли он числом или нет, если является.
```
function arrayCheck(myArray){
    for (item of myArray){
        if (typeof(item) === 'number'){
            // code
        } else {
            // code
        }
    }
}
```

## even and not even checking
Если item является число, то проверяем на чётность. Если число чётное то к переменной countOfEven прибавляем 1, если не чётное то к countOfNotEven прибавляем 1. Если item НЕ является числом то ничего не происходит.
```
function arrayCheck(myArray){
    for (item of myArray){
        if (typeof(item) === 'number'){
            if (item % 2 === 0){
                countOfEven += 1;
            } else {
                countOfNotEven += 1;
            }
        } else {
            // console.log(`${item} it's not a number`)
        }
    }
}
```

## console.log after conditionals statements
После окончания перебора элементов в массиве выводится 3 текста, в первом выводится какой элемент является нулевым по индексу, второй текст выводит количетсов чётных чисел, а в третьем тексте выводится количество не чётных чисел.
```
function arrayCheck(myArray){
    for (item of myArray){
        if (typeof(item) === 'number'){
            if (item % 2 === 0){
                countOfEven += 1;
            } else {
                countOfNotEven += 1;
            }
        } else {
            // console.log(`${item} it's not a number`)
        }
    }
    console.log(`Zero item = ${myArray[0]}`); // Zero item is = true
    console.log(`Even count of numbers = ${countOfEven}`); // Even count of numbers = 4
    console.log(`Not even count of numbers = ${countOfNotEven}`); // Not even count of numbers = 2
}

arrayCheck(myArray);
```


# Exercise 2
Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

## function creating
В самом начале мы создали функцию, которая в виде параметра имеет число.
```
function getSimpleNum(number){
}
```

## number checking
Здесь мы проверяем число на простоту и на сколько большое. Если число больше или равно 1, то число является простым., если число больше 1000, то выводим ошибку по тз., если ничего не верно из двух условий, то число является не простым.
```
function getSimpleNum(number){
    if (number >= 1 && number <= 1000){
        console.log(`Number (${number}) is simple.\n`);
    } else if (number > 1000){
        console.log(`Error! The number (${number}) cannot be more than 1000.\n`);
    } else{
        console.log(`Error! The number (${number}) is not simple, because it is less than 1.\n`);
    }
}
```

## function calling
Вызывае функцию с определенными аргументами.
```
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
```


# Exercise 3
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

## function creating
В самом начале мы создали функцию, которая в виде параметра имеет число num_A.
```
function a(num_A){
}
```

## return function
В функции создаём функцию, которая сразу будет срабатывать, она в виде параметра имеет число num_B. А также эта функция внутри будет иметь выражение, которое выведет сумму двух чисел.
```
function a(num_A){
    return function b(num_B){
        return num_A + num_B;
    }
}
```

## function calling
Вызываем функцию с определёнными аргументами и выводим результат суммы.
```
function a(num_A){
    return function b(num_B){
        return num_A + num_B;
    }
}

let numAdding = a(10); // argument for first(a) function
let result = numAdding(5); // argument for first function in function (a)

console.log(result); // 15
```


# Exercise 4
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

## function creating
В самом начале мы создали функцию, которая в виде параметра имеет начальное число и конечное число.
```
function numbers(start, end){
}
```

## interval creating
Внутри функции мы создали переменную nowNumber которая будет иметь число start, затем создали функцию с интервалом в 1 секунду.
```
function numbers(start, end){
    let nowNumber = start; // add new variable for now number
    // add a intervalId where we can see a setInterval function
    const intervalId = setInterval(()=> {
    }, 1000 ) // repeat every 1000 ms (1 second)
}
```

## number checking
Внутри интервала будет выводиться число, затем будет проверяться на равность конечного и начального числа, если равны то интервал завершается, в противном случае будет проверяться число в функции, если start больше end числа то nowNumber в интервале будет отниматься на 1, если start меньше чем end число то nowNumber будет прибавляться на 1. Также само собой будем вызывать функцию с аргументами.
```
function numbers(start, end){
    let nowNumber = start; // add new variable for now number
    // add a intervalId where we can see a setInterval function
    const intervalId = setInterval(()=> {
         console.log(nowNumber)
        // if now number === end number we will end the interval
        if (nowNumber === end){
            clearInterval(intervalId)
        }
        // function what check the number is positive or negative
        function numCheck(){
            if (start > end){
                nowNumber--; // after console.log we will plus + 1 for number
            } else{
                nowNumber++; // after console.log we will minus - 1 for number
            }
        } numCheck();
    }, 1000 ) // repeat every 1000 ms (1 second)
}

numbers(-22,-24);
```


# Exercise 5
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль.

## function creating
В самом начале создали стрелочную функцию, которая по тз. должна в виде параметров принимать x и n числа.
```
const degree = (x,n) => {
}
```

## number checking
В функции будет проверять число на позитивность. Если все x и n числа больше или равны 1 то выводится ответ: x в степени n;, в крайнем случае будет выводиться ошибка.
```
const degree = (x,n) => {
    if (x >= 1 && n >= 1){
        console.log(x**n)
    } else{
        console.log('\nError! The number is not a natural\n');
    }
}
```

## functiom calling

Вызываем функцию с определенными аргументами.
```
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
```



# Conclusion - Заключение
Это был мой первый опыт с readme.md, дальше я постараюсь научиться делать документацию получше. Если по поводу функций в js, то я понял.
Я считаю, что в отличии от прошлой работы с массивами (которую я переделал после оценивания ментора) в функциях я разобрался намного быстрее, возможно это связано с тем, что они полегче, но я так не считаю, скорее всего в заданиях с массивами я был менее внимателен.
Спасибо за внимание!
