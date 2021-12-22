const path = require('path')

const base  = path.basename('user/data/sample.txt')
const extName = path.extname('user/data/sample.txt')
const fileName = path.basename('user/data/sample.txt', extName)

const format1 = path.format({ root: 'c://users/data/', name: 'sample', ext: '.txt'})

const parse = path.parse('/users/data/sample.txt')

const absolutePath = path.resolve('./sample.txt')

console.log(base)
console.log(fileName)
console.log(format1)
console.log(path.join('/','users',base))
console.log(parse)
console.log(absolutePath)