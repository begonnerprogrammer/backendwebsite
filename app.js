const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
const port=process.env.PORT || 2000;
const submiteddata=require("../fullstackwebsite/src/models/schema");
const exp = require("constants");
require("./src/db/conn");

const staticpath=path.join(__dirname,"public");
const templatepath=path.join(__dirname,"templates/views");
const partialspath=path.join(__dirname,"templates/partials");


app.use(express.urlencoded({extended:false}));
//Middle ware
// app.use('/css',express.static(path.join(__dirname,"node_modules/bootstrap/dist/css")));
// app.use('/js',express.static(path.join(__dirname,"node_modules/bootstrap/dist/js")));
// app.use('/jq',express.static(path.join(__dirname,"node_modules/jquery/dist")));
// app.use(express.static(staticpath));
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialspath);




app.get("/",(req,res)=>{
res.render("index")
})


// app.get("/contact",(req,res)=>{
//     res.render("contact")
//     })


app.post("/contact",async(req,res)=>{
try{
      const newdata=new submiteddata({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        massage: req.body.massage
      })
      const posteddata=await newdata.save();
      res.render("index");
      
    
}

catch(e){
   res.status(500).send(e)
}
})

app.listen(2000,()=>{
    console.log(`Server in on port ${port}`)
})