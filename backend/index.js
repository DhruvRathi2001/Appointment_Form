import  express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import {Appointment} from './model/Appointment.js'
import {connectDB} from './config/database.js'

const app = express();

dotenv.config({
    path: "./config/config.env",
  });
connectDB()

app.use(express.json())
app.use(cors());


app.post('/',async (req,res)=>{
    try{
        let appointment = new Appointment(req.body);
        let result  = await appointment.save()
        res.send(result)
    }
    catch(err){
        res.send(err)
    }
})


 

app.listen(4000,()=>{
    console.log("Server is running on port 4000")
})