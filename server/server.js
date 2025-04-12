const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

mongoose.connect('mongodb+srv://anishsdmcbm:s22508@cluster0.bgnq0.mongodb.net/')
.then(()=>console.log("DB Connected Successfully!"))
.catch((err)=>console.log(`MongoDB Connection Error! ${err}`)
)

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin:'http://localhost:5173/',
    methods:['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders:[
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
    credentials:true
  })
)

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, ()=>console.log(`server is now running at port:${PORT}`)
)