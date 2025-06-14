const express =require("express");
let app =express();
let port=8080;

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.get("/register", (req,res)=>{
    res.send("standard GET response");
});
app.post("/register",(req,res)=>{
    res.send("standard POST response");
//});
//app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`);
});