const fs = require('fs'), server = require('http').createServer();
server.on('request',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    const src = fs.createReadStream('1.jpg');
    src.pipe(res);
    /*fs.readFile('1.jpg',(err, data)=>{
        if(err) throw err;
        res.end(data);
    })*/
}).listen(8181,'127.0.0.1');