function slow(callback) {
    setImmediate(() => {
        for (let i = 0; i <= 5e8; i++) { }
    });

    if (Math.random() > 0.5) {
        return callback("Error", null);
    }
    callback(null, { id: 12345 });
}
function exec(fn) {
    const cb = function (val1, val2) {
        //console.log("VALLL: " + val1 + " VAL2:" + val2);
        
        if (val1 === "Error") {return "null value has given";}
        return "information is " + val2.id;
    }
    let ress = fn(cb);
    console.log("val:" + ress);
    return {
        done: function (func) {
            if (ress !== "Error");
            func(ress);
            return this;
        },
        fail: function (func) {
            if (ress === "Error");
            func(ress);
            return this;
        }
    }
}
exec(slow).done(function (data) { console.log(data); })
    .fail(function (err) { console.log("Error: " + err); });