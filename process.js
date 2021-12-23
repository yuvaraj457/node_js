const {argv} = require('process')
require('dotenv').config()

process.on('exit', code => {
	setTimeout(() => {
		console.log('Will not get displayed')
	}, 0)

	console.log('Exited with status code:', code)
})

process.nextTick(() => console.log('\n next tick - After current events, before timing event\n'))

console.log(process.env.key)

const os = require('os')

console.log('hello')

console.log(__dirname)

console.log("Before ",process.cwd())

process.chdir(os.homedir())

console.log("After ",process.cwd())

console.log(process.cpuUsage())


process.emitWarning('Warning_Occured', {
    code : 'My Warning',
    detail : 'This is detailed information about warning'
})


process.emitWarning('Something Happened!', 'CustomWarning')

// process.exit(1)

setTimeout(() => console.log('\n Timing Event \n'), 2000)



argv.forEach((val, index) => {
    console.log(`${index} : ${val}`)
})
// process.abort()
