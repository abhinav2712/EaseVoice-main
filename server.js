const express=require('express')
// const mongoose=require('mongoose')
const path=require('path')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
const connectDB=require('./config/config')
require("colors")

dotenv.config()

connectDB();

const app=express();
// for middlewares:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//all routes:

app.use('/api/items',require('./router/itemRoutes'));
app.use('/api/users',require('./router/userRoutes'));
app.use('/api/bills',require('./router/billsRoutes'));

//static files:
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

const PORT= process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

