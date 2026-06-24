const express=require('express');
const cors=require('cors');    
require('dotenv').config(); 
const authRoutes=require("./routes/authRoutes")
const connectDB= require('./config/db')
const protect = require("./middleware/authMiddleware");

let app=express();
connectDB()
//middleware

app.use(cors());
app.use(express.json());

//dotenv
// auth routes
app.use("/api/auth", authRoutes);

//protected routes
app.get("/api/protected", protect, (req, res) => {
  res.json(req.user);
});

app.get('/',(req,res)=>{
     res.send("Chat api is running");
});

app.listen(process.env.PORT,()=>{
    console.log("server is running on port " + process.env.PORT);
});