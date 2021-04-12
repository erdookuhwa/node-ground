const { readFileSync, writeFileSync } = require('fs')

// reading from files - provide path+filename & encoding method to use
const readFirst = readFileSync('./content/first.txt', 'utf8')
const readSecond = readFileSync('./content/second.txt', 'utf8')
console.log(readFirst)
console.log(readSecond);

// writing to files
writeFileSync('./content/third.txt', `Contents of the first file: ${readFirst} and contents of the second file: ${readSecond} combined to form third.txt`)

// append to the file
writeFileSync( './content/third.txt', 'Random additional comment appended to this file', {flag: 'a'} )