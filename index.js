const express = require('express');

const app = express();
app.use(express.json())

const students =  []

var searchResults = [];

app.get('/student', (req, res) => {
    res.json(students)
})

app.post('/student', (req, res) => {
    console.log(req.body)
    students.push({
            id: students.length+1,
            name: req.body.name
        }
    )
    res.send(true)
})

app.listen(8001, () => {
    console.log("Server is running on port " + 8001)
})