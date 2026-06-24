const mongoose = require('mongoose');
require('dotenv').config(); 
const connectDB = async ()=>{

    try{
        await mongoose.connect(process.env.MONGODB_URI,{dbName: "chatdb"})
            
        console.log("database connected");
        
    }catch(error){
        console.error(error)
    };
    
}

module.exports=connectDB;