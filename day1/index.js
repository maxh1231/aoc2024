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

left.sort((a, b) => a - b)
right.sort((a, b) => a - b)

console.log(left, right);

for (let i = 0; i < left.length; i++) {
    count += Math.abs(left[i] - right[i])

}

console.log(count);
// let leftarr = data[0].substring(0, data[0].indexOf(' ')).split('').sort((a, b) => a - b).join('');
// let rightarr = data[0].substring(data[1].length - 5, data[1].length).split('').sort((a, b) => a - b).join('');


// for (let i = 0; i < leftarr.length; i++) {

//     count += Math.abs(parseInt(leftarr[i]) - parseInt(rightarr[i]));

// }

// for (let i = 0; i < data.length; i++) {

//     let leftarr = data[i].substring(0, data[i].indexOf(' ')).split('').sort((a, b) => a - b).join('');
//     let rightarr = data[i].substring(data[i].length - 5, data[i].length).split('').sort((a, b) => a - b).join('');

//     console.log(leftarr, rightarr)
//     for (let j = 0; j < 5; j++) {
//         count += Math.abs(parseInt(leftarr[j]) - parseInt(rightarr[j]));
//         console.log(leftarr[j], rightarr[j], count);
//     }

// }