console.log("1. setTimeout() function has timer and also queued in timer phase. setInterval don't have timer and queued in Check phase");
console.log("2. process.nextTick() queued before timer and i/o also not part of the event loop");
console.log("3. setTimeout(), setInterval(), console.log(), Array, Boolean, Date, Number, String, stream, require");
