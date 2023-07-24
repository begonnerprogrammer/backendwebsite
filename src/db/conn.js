const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fullstack")
.then(()=>{
    console.log("Connected Sucessfully")
})
.catch((e)=>{
  console.log(e)
})

