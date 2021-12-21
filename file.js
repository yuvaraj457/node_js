const fs = require('fs')
const axios = require('axios')

const fetchData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    fs.writeFileSync(`${__dirname}/sample.txt`, JSON.stringify(data), {flag : 'w+'}, err => console.log(err))
}

const read = () => {
    try{
        const data = fs.readFileSync(`${__dirname}/sample.txt`, 'utf-8')
        return data
    }
    catch(err){
        return err
    }
}

fetchData()
.then(read)
.then(res => console.log(res))
.catch(error => console.log(error))