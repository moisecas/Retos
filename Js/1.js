// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log(sum); // 233168 

//función fibonacci 
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); 

//función factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120 




