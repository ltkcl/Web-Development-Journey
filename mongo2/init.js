const mongoose= require('mongoose');
 async function main(){
     await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
 }
 main()
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
 })
const Chat= require("./model/chat.js");
Chat.insertMany( [{
    from :"ram",
    to:"shyam",
    msg:"Provide the exam sheets",
    created_at:new Date(),
},{from :"om",
    to:"ramesh",
    msg:"What are you learning ?",
    created_at:new Date(),},
    {from :"lokesh",
        to:"yum",
        msg:"why are you reading js",
        created_at:new Date(),}
]).then(async (res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})