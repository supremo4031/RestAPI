
const express = require('express');
const router = new express.Router();
const Student = require('../models/students');


router.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch(err) {
        res.status(404).send(studentData);
    }
});

// get all student data
router.get('/students', async (req, res) => {
    try {
        const studentData = await Student.find();
        res.status(200).send(studentData);

    } catch(err) {
        res.status(404).send(studentData);
    }
});

// get individual student data
router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData) {
            res.status(404).send();
        } else {
            res.status(200).send(studentData);
        }
    } catch(err) {
        res.status(404).send(studentData);
    }
});

// update the student using id
router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        if(!studentData) {
            res.status(404).send();
        } else {
            res.status(200).send(studentData);
        }
    } catch(err) {
        res.status(404).send(studentData);
    }
});



// delete the student by id
router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findByIdAndDelete(_id);
        if(!studentData) {
            res.status(404).send();
        } else {
            res.status(200).send(studentData);
        }
    } catch(err) {
        res.status(500).send(studentData);
    }
})


module.exports = router;