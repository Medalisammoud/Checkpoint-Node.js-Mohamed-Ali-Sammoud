const fs = require('fs')
const path = require('path')
module.exports= function (dir, Str, callback) {

    fs.readdir(dir, function (err, files) {
        if (err)
          return callback(err)
    
          files = files.filter(function (file) {
          return path.extname(file) === `.${Str}`
        })
    
        callback(null, files)
      })
}