const express = require('express');
var http = require('http');

const app = express();
app.use(express.json())

const students =  [{server: 'This is an express server'}]


app.get('/', (req, res) => {
    res.json(students)
})

app.post('/', (req, res) => {
    console.log(req.body)
    students.push({
            id: students.length+1,
            name: req.body.name
        }
    )
    res.send(true)
})

app.listen(process.env.PORT || 8001, () => {
    console.log("Server is running on port " + 8001)
})




// http.createServer(function (req, res) {
//   res.write('This is node http server'); 
//   res.end(); 
// }).listen(8080);