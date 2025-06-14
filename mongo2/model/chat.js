const mongoose=require("mongoose");

const  chatSchema = new mongoose.Schema(
    {
        from: {
            type: String,
            required:true,
        },
        to :{
          type:String,
            required:true,
        },
        msg : {
            type: String,
            maxLength: 50,
        },
        created_at :{
            type:Date,
        }
    }
);
const  Chat = new mongoose.model("Chat",chatSchema);
const express=require('express');
const router=express.Router();
router.get("/chats/new/1",(req,res)=>{
    res.send("Hello World");
});


