const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let arr = (data.match(/mul\(\d+,\d+\)/g))
let part1 = 0;

arr.forEach((item) => {
    let valid = item.match(/\d+/g).map(Number)
    let product = valid.reduce((a, b) => a * b);

    part1 += product;
    console.log(part1);

})