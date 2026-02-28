import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productsRoutes.js';
import cartRoutes from './routes/cart.js';
import addressRoutes from './routes/address.js';
import orderRoutes from './routes/order.js';

dotenv.config();
console.log(process.env.MONGO_URI)
const dbConnect=async ()=>{
    try{
        console.log("imside db")
        await connectDB();
        console.log("isavblavab")

    }catch(error){
        console.log("dbnot connected")
    }
}
dbConnect()
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/order',orderRoutes )

app.get('/', (req, res) => {
    res.send('API is running...');
});


app.listen(5001, () => {
    console.log('Server is running on port 5001');
});