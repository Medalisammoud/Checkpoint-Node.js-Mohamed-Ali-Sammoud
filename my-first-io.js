const fs = require('fs')
const buf=fs.readFileSync(process.argv[2])
const arr = buf.toString().split('')
let count=0;
for(let i=0;i< arr.length-1;i++){
    if(arr[i]==='\n'){
        count++;
    }
}
console.log(count)
