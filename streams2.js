const stream = require('stream')

const readableStream = new stream.Readable({
    read(){}
})
const writableStream = new stream.Writable()

writableStream._write = (chunk, enc, next) => {
    console.log(chunk.toString())
    next()
}

readableStream.pipe(writableStream)

readableStream.push(__dirname+'sample.txt')

readableStream.on('close', () => writableStream.end())
writableStream.on('close', () => console.log('ended'))
readableStream.destroy()