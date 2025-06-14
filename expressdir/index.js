const express = require("express");
const app =express();
let port = 3000;
app.listen(port,()=>{
    console.log("Server is listening");
})
app.use((req,res)=>{
     console.log(" New Incoming request")
})
app.get("/username/:id",(req,res)=>{
    let {username,id}=req.params;
    app.send(`<h2>Hello , {username} with {id}</h2>`);
})
