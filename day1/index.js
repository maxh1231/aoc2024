const fs = require('fs')
let data = fs.readFileSync('input.txt', "utf-8").split('\n')
let count = 0;
let left = [];
let right = [];

for (let i = 0; i < data.length; i++) {
    let leftChunk = data[i].substring(0, data[i].indexOf(' '))
    let rightChunk = data[i].substring(data[i].length - 5, data[i].length)
    left.push(leftChunk);
    right.push(rightChunk);
}

left.sort((a, b) => b - a)
right.sort((a, b) => b - a)

let arr = [];
for (let i = 0; i < left.length; i++) {
    count += Math.abs(left[i] - right[i])
    let num = 0;

    // WIP remove redundant iterations cuz arrays are sorted
    for (let j = 0; j < right.length; j++) {
        if (left[i] === right[j]) {
            num++;
        }
    }
    arr.push(left[i] * num);
    console.log(randomvar);
}

console.log(`part 1: ${count}`);
console.log(`part 2: ${arr.reduce((sum, num) => sum + num)}`);