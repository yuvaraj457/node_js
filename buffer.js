const buf = Buffer.from('Hello World')
for (let i of buf){
    console.log(i)
}

const buf2 = Buffer.alloc(3)
buf2.write('hi')
console.log(buf2)

const buf3 = Buffer.from('hello')
buf3[0] = 76
console.log(buf3.toString())

const slice = buf.subarray(0,5)
const bufCopy = Buffer.alloc(5)
bufCopy.set(slice)

console.log(slice.toString())
console.log(bufCopy.toString())