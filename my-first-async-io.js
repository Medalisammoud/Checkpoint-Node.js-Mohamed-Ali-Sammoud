const fs = require('fs')
fs.readFile(process.argv[2],(err,data)=>{
    if (err) {
        throw err;
    }
    const line = data.toString().split('\n').length-1
    console.log(line)
})
