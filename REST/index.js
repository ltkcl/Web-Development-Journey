const express=require("express");
const path = require("path");
const app=express();
const port = 3000;

const { v4: uuidv4 } = require('uuid');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(__dirname + '/public/style.css'));
let posts =[{
    id : uuidv4(),
    username : "kishore",
    content : "Hardwork is important to achieve success",
},{
    id : uuidv4(),
    username: "ApnaCollege",
    content: "Act wisely , fight bravely"
},{
    id : uuidv4(),
    username:"rahulkumar",
    content:"I got selected for my 1st internship"
}];

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts});    
});
app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/post",(req,res)=>{
    let { username,content}= req.body;
    posts.push({username,content});
    res.send("Post request working");
});

app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`);
});
