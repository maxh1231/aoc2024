const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf-8').split('\n');

console.log(data);

const perimeter = {
    left: [
        [0, -1],
        [0, -2],
        [0, -3],
        [0, -4]
    ],
    downLeft: [
        []
    ]
}