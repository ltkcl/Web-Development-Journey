const mangoose = require('mongoose');
async function main(){
    await mangoose.connect("mongodb://127.0.0.1:27017/");
}
main()
.then((res)=>{
    console.log("Connection established  successfully");
})
.catch((err)=>{
    console.log("Connection error", err);
})
const userSchema = new mangoose.Schema({
    name:String,
    email:String,
    age:Number,
})
const User = mangoose.model("User",userSchema);
User.findByIdAndUpdate("684518146264c4e82b52cd2c",{age:15},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log("User not updated successfully");
})