const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let arr = (data.match(/mul\(\d+,\d+\)/g));
let part1 = 0;
let part2 = 0;

arr.forEach((item) => {
    let isSafe = true;
    let valid = item.match(/\d+/g).map(Number);
    let product = valid.reduce((a, b) => a * b);
    let substr = data.substring(0, data.indexOf(item));
    let rev = substr.split('').reverse().join('');
    let redLight = rev.search(/\)\(t'nod/g);
    let greenLight = rev.search(/\)\(od/g);

    if (redLight != -1 && greenLight == -1) {
        isSafe = false;
    }

    if (greenLight > redLight && greenLight != -1) isSafe = false;

    part1 += product;

    if (isSafe) part2 += product;
})

console.log("Part 1: " + part1);
console.log("Part 2: " + part2);