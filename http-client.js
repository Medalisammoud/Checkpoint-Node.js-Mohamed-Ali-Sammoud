const http = require('http')
const httpclient=http.get(process.argv[2],(response)=>{
    response.setEncoding('utf8');
    response.on('data', console.log)
    response.on('error', console.error)
    
})
