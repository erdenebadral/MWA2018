var MongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');
var server = require('http').createServer();

function insertData() {
    MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
        if (err) throw err;
        let db = client.db('firstDB');

        db.collection('homework7').insert({ message: 'ba12e76147f0f251b3a2975f7acaf446a86be1b4e2a67a5d51d62f7bfbed5c03' }, (err => {
            if (err) throw err;
            console.log(" Message inserted successfully");
            client.close();
        }));

    });
}
var loadData = MongoClient.connect('mongodb://127.0.0.1:27017', function (err, client) {
    if (err) throw err;
    let db = client.db('firstDB');
    let val = db.collection('homework7').findOne({});
    client.close();
    return val;

});
function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}
insertData()
  //insertData();
/*server.on('request',(req,res)=>{
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    const src = fs.createReadStream('1.jpg');
    src.pipe(res);
    fs.readFile('1.jpg',(err, data)=>{
        if(err) throw err;
        res.end(data);
    })
}).listen(8181,'127.0.0.1');*/