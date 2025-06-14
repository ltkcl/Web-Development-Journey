const express = require("express");
const mongoose=require("mongoose");
const path = require("node:path");
const app=express();
const Chat= require("./model/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended : true}));

let port =7070;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});
app.get('/', (req, res) => {
    res.send("It is working");
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main()
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
    console.log(err);
});

app.get("/",(req,res)=>{
    res.send("The root is working");
});

app.get("/chats", async (req,res)=>{
    let chat = await Chat.find();
    console.log(chat);
    res.render("index.ejs",{chat});
}); 
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
// Create Route
app.post("/chats",(req,res)=>{
    let {from,msg,to}=req.body;
    let newChat = new Chat({
        from :from,
        msg: msg,
        to: to,
        created_at: new Date(),
    });
    console.log(newChat);
    newChat.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err)
    });
    res.redirect("/chats");
});
