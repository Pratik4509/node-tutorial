const os = require('os')
const info = os.userInfo()
    // console.log(info)
    // console.log(`Uptime ${os.uptime}`);
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    usedMem: os.totalmem() - os.freemem()
};

console.log(currentOs)