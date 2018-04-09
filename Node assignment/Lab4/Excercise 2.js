const os = require('os');


function *checkSystem() {
    console.log("Checking your system...");
    if (os.freemem() < 2147483648) {
         yield "This app needs at least 2 GB of RAM.";

    } else if (os.cpus().length < 2) {
        yield "Processor is not supported.";

    } else {
        yield "System is checked successfully.";

    }

}
const msgs = checkSystem();
for(const msg of msgs){
    console.log(msg);
}



