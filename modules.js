// CommonJS, every file is a module by default
// Modules - encapsulated code

const names = require('./three_names')
const greet = require('./five_utils')
require('./six_phew')

console.log(names.jason)
greet(names.alice)

const os = require('os')

const myOSInfo = {
    name: os.type(),
    release: os.release(),
    free_memory: os.freemem(),
    total_memory: os.totalmem()
}
// console.log(os.userInfo())
console.log(myOSInfo);