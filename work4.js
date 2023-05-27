/* 
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15). */



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
    }, 1000) // repeat every 1000 ms (1 second)
}

numbers(-22,-24);

// -22
// -23
// -24