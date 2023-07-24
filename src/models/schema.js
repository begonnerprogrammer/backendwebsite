const mongoose=require("mongoose");
const validator=require("validator");

const newshema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
    minlength:3
  },
  email:{
    type:String,
    required:true,
    validate(value){
        if(!validator.isEmail(value)){
         throw new Error("Invalid Email id")
        }
    }
  },
  phone:{
type:Number,
required:true,
min:10
  },
  massage:{
    type:String,
    required:true,
    minlength:3
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const submitdata=new mongoose.model("submitdata",newshema);
module.exports=submitdata;