import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';
import dotenv from 'dotenv'
const app = express();
dotenv.config();

const url = process.env.MONGODB_URI;
mongoose
  .connect(
    url,{useNewUrlParser: true,
      useUnifiedTopology: true,}
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use(express.json()); 
app.use('/api/user', router);
app.use('/api/blog',blogRouter);
