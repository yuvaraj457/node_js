const eventEmitter = require('events')
const event1 = new eventEmitter()
const event2 = new eventEmitter()

event1.on('start',() => console.log('Hello World, The event started'))

event1.on('end', () => console.log('The event ended'))

event2.once('value', (...args) => {
    const value = args.join(', ')
    console.log(`The Values are ${value}`)
})

const callbackA = () => {
    console.log('callbcak A')
    event2.removeListener('callbacks', callbackB)
}

const callbackB = () => {
    console.log('callback B')
}

event2.on('callbacks', callbackA)
event2.on('callbacks', callbackB)

event1.emit('start')
event1.emit('end')

event2.emit('value',2,4,6,8)
event2.emit('value',2,4)

event2.emit('callbacks')
event2.emit('callbacks')

event2.removeAllListeners('callbacks')
event2.emit('callbacks')