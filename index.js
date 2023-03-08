import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
//middlewares
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan('common'))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))

//routes 
app.use('/user',userRoutes)
app.use('/admin',adminRoutes)

//database connection
const PORT = process.env.PORT || 6000
mongoose.set('strictQuery',true)
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let db = mongoose.connection;

// for error handling
db.on("error",console.error.bind(console,"Connection Error!"))

// for validation
db.once("open",()=>{console.log("We are connected to the cloud!")})

app.listen(PORT,() => console.log(`Connected at server port: ${PORT}`))
