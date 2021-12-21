const axios = require('axios')

const fetchUserTwo = async() => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/2')
     console.log(data.name)
}

const fetchUserOne = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    console.log(data.name)
}

const fetchUserthree = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/3')
    console.log(data.name)
}



fetchUserOne()
.then(fetchUserTwo)
.then(fetchUserthree)
.catch(error => console.log(error.message))