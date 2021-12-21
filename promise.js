let work_done = true

const checkWorkDone = new Promise((resolve, reject) => {
    if(work_done){
        return setTimeout(() => resolve('The work has completed.'), 2000) 
    }
    return reject('The work is still pending...')
})

console.log('before')
checkWorkDone
.then(res => console.log(res))
.catch(error => console.log(error))

console.log('after')