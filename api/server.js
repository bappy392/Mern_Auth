import express from 'express';
import bodyParser from 'body-parser'
import cookieParser  from 'cookie-parser'
import mongoose from 'mongoose'
import User from './models/User.js';
import bcrypt from 'bcrypt'
// import cors from 'cors'

//mongodb://127.0.0.1:27017/
await mongoose.connect('mongodb://127.0.0.1:27017/auth', {useNewUrlParser:true, useUnifiedTopology:true})
const db=mongoose.connection;
db.on('error', console.log)


<<<<<<< HEAD
const app = express()
app.use(bodyParser.json({extended:true}))
app.use(cookieParser())
// app.use(cors({
//   credentials:true,
//   origin:'http://localhost:3000'
// }))
=======
const app = express();
>>>>>>> 276d77e7e7bcfe35ac169dc7fe7b758a69c30f02

app.get('/', (req, res) => {
    res.send('Hello3')
})

//http://localhost:4000/register
// {
//   "email":"k@gmail.com", 
//    "password":"12345"
// }
app.post("/register", (req, res) => {
  const {email, password}=req.body
  console.log(email+"===="+password)
   const hashedPassword=bcrypt.hashSync(password, 10)
  // const user=User({password:hashedPassword, email})
  // user.save().then((userInfo)=>{
  //     console.log(userInfo)
  //     res.send('')
  // })
});


app.listen(4000);