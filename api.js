
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
require('dotenv').config();
const users = require('./routes/users');
const projects = require('./routes/project');
const products = require('./routes/product');
const port = 5000;

app.use(express.json());
app.use(cors());



const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to port ${port}`))
    }
    catch(error) {
        console.log(error)
    }
}

app.use('/api/users', users)
app.use('/api/projects', projects)
app.use('/api/products', products)
start()

