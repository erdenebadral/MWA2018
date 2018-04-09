const dns = require("dns")

dns.lookup("www.mum.edu",(err, data)=>{
    if(err) throw err;
    console.log(data);
})