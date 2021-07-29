const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!");
//     // res.send("helloo")
//     res.send('<h1>this is my webpage</h1>')
// });
app.get("/",(req, res)=>{
    res.send("this is home page");
})
app.get('/cats',(req,res)=>{
    res.send("cat response");
})

app.get("/dogs",(req,res)=>{
    res.send('woof');
})

app.get("*", (req,res)=>{
    res.send("i dont know this route");
})
app.listen(3000, () => {
    console.log("Listening on port 3000");
});