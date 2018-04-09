const http = require("http");
const fs = require("fs");
const url = require('url');
const {fork} = require('child_process');


http.createServer((req, res) => {
    const url = url.parse(req.url, true);
    const path = fileUrl.query.url;

    const childProcess = fork("child.js", [path]);
    childProcess.stdout.on('data', data => {
        res.write(data.toString());
    });

    childProcess.on('error', error => {
        res.end(error.message);
    });

    childProcess.on('exit', err => {
        res.end();
    });

}).listen(4000, '127.0.0.1');


