const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8').split('\n');

let arr = [];
let count = 0;

console.log(data);
for (let i = 0; i < data.length; i++) {
    let chunk = data[i].split(' ').map((Number));

    let chunkAsc = chunk.toSorted((a, b) => a - b);
    let chunkDesc = chunk.toSorted((a, b) => b - a);

    let isSafe = true;
    if (JSON.stringify(chunk) == JSON.stringify(chunkAsc) || JSON.stringify(chunk) == JSON.stringify(chunkDesc)) {
        for (let j = 1; j < chunk.length; j++) {
            if (Math.abs(chunk[j] - chunk[j - 1]) > 3) {
                isSafe = false;
            }
        }
        if (isSafe) {
            count++;
        }
    } else {
        console.log(chunk);
    }

}

