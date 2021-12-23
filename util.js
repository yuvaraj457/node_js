const util = require('util')
const fs = require('fs')

console.log(util.format('%s:%s', 'hello'))

const O1 = {
    c : {a : 1, b : 2},
    a : 'hello',
    b : [2, 4, 6]
}

console.log(util.inspect(O1, {sorted : true}))

console.log(util.inspect(O1, {sorted : (a, b) => b.localeCompare(a)}))

const stat = util.promisify(fs.stat)

stat(__dirname+'/sample2.txt')
.then(data => console.log(data))
.catch(error => console.log(error))
