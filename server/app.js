const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

app.use(express.json())

// fun testing
app.post("/", (req, res) => {
    const writeDown = req.body;
    console.log(writeDown)  
    return res.json({
     msg: writeDown
    })
})  
app.get("/", (req, res) => {
    return res.json({
       msg: 'Hello'
    })    
})

// single route in our app 1) / route which consiste about me, a nice clickable boxes about projects, experiences, skills and to reach out dm at x
