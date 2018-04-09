const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for(let i=0; i<= 1000000; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();
file.on('finish',()=>{
    console.log('File created');
    compress();
})

var zlib = require('zlib'); 
var gzip = zlib.createGzip(); 
var gunzip = zlib.createGunzip();

function compress(){
    let readable = fs.createReadStream('./big.txt'); 
    let compressed = fs.createWriteStream('./big.txt.gz'); 
    
    readable.pipe(gzip).pipe(compressed); 
    compressed.on('close',()=>{
        console.log("compressed");
        deCompress('./big.txt.gz','./uncompressedFile.txt');

    })
}
function deCompress(compressFileName, decompressFileName){
    let readable = fs.createReadStream(compressFileName); 
    let deCompress = fs.createWriteStream(decompressFileName); 
    readable.pipe(gunzip).pipe(deCompress);
    deCompress.on('close',()=>{
        console.log(` ${compressFileName} file successfully decompressed to ${decompressFileName}`);
    })
}