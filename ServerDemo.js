const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3002;
const server = http.createServer(function (req, res) {

   if(req.url == "/list"){
    fs.readFile('crud2.html' , (err,data)=>{
        if(err){
            console.log(err);
        }
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/html');
        res.end(data);
    })
   }
});

server.listen(port,()=>{
    console.log(`Server running at : ${port}`);
})
  