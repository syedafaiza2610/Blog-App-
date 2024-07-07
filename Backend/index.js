const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/blog.js')
const cors =  require('cors')



require('dotenv').config({ path: '../.env' })


const app = express()
const PORT = process.env.port || 5000
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err))

app.use(routes)



app.get("/test", (req, res) => res.send("todo server is running on vercel"))
app.listen(PORT, () => console.log(`Server is Running on: ${PORT} `))