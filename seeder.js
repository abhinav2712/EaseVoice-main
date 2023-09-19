const mongoose=require('mongoose')
const dotenv=require('dotenv')
const connectDB=require('./config/config')
const itemModel=require('./models/itemModel')
const items=require('./utils/data')
require('colors')
dotenv.config()
connectDB()

const importData=async()=>{
    try{
        await itemModel.deleteMany({})
        const itemsData=await itemModel.insertMany(items)
       
        console.log('Data imported successfully'.green.inverse);
        process.exit()
    }catch(error){
        console.error(`${error.message}`.red.inverse);
        process.exit(1)
    }
};

importData();