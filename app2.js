'use strict';

const number = process.argv[2] || 0;
let result = 1;
for (let i = 1; i <= number; i++){
    result = result * i;
}
console.log(result);