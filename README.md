# module6_homework
## Exercise 1
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

# array and variables
В самом начале я создал массив с разными значениями, а также создал 2 переменные которые в самом конце будут выводить сохранившийся результат. К примеру в countOfEven будет находиться количество чётных чисел, а в countOfNotEven количество нечётных чисел.
```
let myArray = [true, 1, false, 'Number', 2,9,10,20,30]
let countOfEven = 0;
let countOfNotEven = 0;
```

# function creating
После объявления основных переменных для нашей программы мы начинаем нашу функцию с именем arrayCheck которая в качестве параметра будет принимать массив ранее созданный.
```
function arrayCheck(myArray){
}
```

# for-of cycle creating
Функция внутри себя будет содержать цикл for-of, который будет перебирать каждый item в массиве.
```
function arrayCheck(myArray){
    for (item of myArray){
        // code
    }
}
```

# item checking
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

# even and not even checking
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

# console.log after conditionals statements
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
