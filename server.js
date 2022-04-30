const express = require('express')
const app =express();
app.use(express.static('public'))
const port = 5000

app.get('/',(request,response)=>{
    response.type('text/html')
    response.send('<a href="index.html"></a>')
})

app.listen(port,() =>console.log('Server start on port : '+port))