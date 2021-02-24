

const express = require('express');
require('./db/conn');
const studentRouter = require('./routers/student')

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(studentRouter);

app.get('/', (req, res) => {
    res.send('Hello from other side');
});




app.listen(port, () => {

});