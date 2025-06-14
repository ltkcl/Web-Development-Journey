const mangoose=require("mongoose");
async function main(){
    await mangoose.connect("mongodb://127.0.0.1:27017/amazon");
}
main()
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
});
const Userschema = new mangoose.Schema({
    name:{
        type:String,
        required:true,
    }
});
