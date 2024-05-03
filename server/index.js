const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UseModel=require('./models/Users')

const app=express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://anithay:mern@cluster0.qwcjme1.mongodb.net/Crud").then(()=>{
    console.log("DB connected...")
}).catch((err)=>{
    console.log(err)

})

app.get('/',(req,res)=>{
    UseModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UseModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})

app.post("/Createuser",(req,res)=>{
    UseModel.create(req.body)
    .then((users)=>res.json(users))
    .catch(err=>res.json(err))
})

app.put("/Update/:id",(req,res)=>{
    const id=req.params.id
    UseModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))

})

app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UseModel.findByIdAndDelete({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(3001,()=>{
    console.log("server is running");
})