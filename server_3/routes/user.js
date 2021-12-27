
const userDetailsModel = require('../model/userModel')

const userDetails = async(req, res) => {
    try{
        const {userName, email, place, age, courses} =  req.body
        const data = await userDetailsModel({
            userName,
            email,
            place,
            age,
            courses
        })
        data.save()
        .then(() => res.status(201).send('submitted successfully'))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

const getUserById =  async(req, res) => {
    try{
        const {userId} = req.query
        await userDetailsModel.findOne({_id : userId})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

const getUserByName = async(req, res) => {
    try{
        await userDetailsModel.find({userName : {$in : ['yuvaraj', 'Raj']}})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

const getUserByAge = async(req, res) => {
    try{
        await userDetailsModel.find({age : {$gt : 18}})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

const getUserByNameOrAge = async(req, res) => {
    try{
        await userDetailsModel.find({$or : [ {userName : 'yuvaraj'}, {age : {$gt : 18}}]})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

const getUserByCourse = async(req, res) => {
    try{
        await userDetailsModel.find({courses : {$elemMatch : {$in : 'React'}}})
        .then(response => res.status(200).send(response))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

const updateUserById = async(req, res) => {
    try{
        const {userId} = req.query
        await userDetailsModel.updateOne(
            {_id : userId},
            {
                $set : {userName : 'Yuvaraj'},
                $currentDate: { lastModified: true }
            }
        )
        .then(() => res.status(200).send("Updated Successfully"))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

const deleteUserById = async(req, res) => {
    try{
        const {userId} = req.query
        await userDetailsModel.deleteOne({_id : userId})
        .then(() => res.status(200).send("Deleted Successfully"))
        .catch(error => res.status(404).send(error.message))
    }
    catch(error){
        res.status(503).send(error.message)
    }
}

module.exports = {
        userDetails, 
        getUserById, 
        getUserByName, 
        getUserByAge, 
        getUserByNameOrAge, 
        getUserByCourse, 
        updateUserById,
        deleteUserById
}