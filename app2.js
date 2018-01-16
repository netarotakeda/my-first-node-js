'use strict';

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const number = process.argv[2] || 0;
let fact = factorial(number);
console.log(fact);
