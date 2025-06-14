const express = require("express");
let app= express();
const port =8080;
app.set("view engine","ejs");
app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`);
});
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/rolldice",()=>{
    res.render("roll_dice.ejs");
})
app.get("ig/:username",(req,res)=>{
    let {username}=req.params;
    res.render("instagram.ejs",{username});
});