const express = require('express')
const { userDetails, getUserById, getUserByName, getUserByAge, getUserByNameOrAge, getUserByCourse, updateUserById } = require('./user')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.post('/userDetails', userDetails)

router.get('/getUserById', getUserById)

router.get('/getUserByName', getUserByName)

router.get('/getUserByAge', getUserByAge)

router.get('/getUserByNameOrAge', getUserByNameOrAge)

router.get('/getUserByCourse', getUserByCourse)

router.post('/updateUserById', updateUserById)

router.delete('/deleteUserById', deleteUserById)



module.exports = router