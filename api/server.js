import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
// import cors from 'cors'
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from './models/User.js';

const app = express()
app.use(bodyParser.json({extended:true}))
app.use(cookieParser())
// app.use(cors({
//   credentials:true,
//   origin:'http://localhost:3000'
// }))

//mongodb://127.0.0.1:27017/
await mongoose.connect('mongodb://127.0.0.1:27017/auth', {useNewUrlParser:true, useUnifiedTopology:true})
const db=mongoose.connection;
db.on('error', console.log)


app.get('/', (req, res) => {
    res.send('Hello3')
})

//URL
//http://localhost:4000/register
// {
//   "email":"k@gmail.com", 
//    "password":"12345"
// }
const secret="secret123"
app.post("/register", (req, res) => {
  const {email, password}=req.body
  //console.log(email+"===="+password)
   const hashedPassword=bcrypt.hashSync(password, 10)
  
 const user=User({password:hashedPassword, email})
 //db save
 user.save().then((userInfo)=>{
      jwt.sign({id:userInfo._id, email:userInfo.email},secret, (err,token)=>{
        if(err){
          console.log('err')
          res.sendStatus(500)
        }else{
          res.cookie('token',token).send({id:userInfo._id, email:userInfo.email})
        }
      })
  })


})

app.get('/user',(req,res)=>{
  const payload=jwt.verify(req.cookies.token, secret)
  User.findById(payload.id).then(userInfo=>{
    console.log("Khan ",userInfo)
    res.json({id:userInfo._id,email:userInfo.email})
  })

})

app.post('/login',(req,res)=>{
  const {email,password}=req.body
  User.findOne({email})
  .then(userInfo=>{
    const passOk=bcrypt.compareSync(password,userInfo.password)
    if(passOk){
      jwt.sign(id:userInfo)
    }
  })

})

app.listen(4000);