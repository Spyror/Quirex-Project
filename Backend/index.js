import express from 'express';
import {DBconnect} from './config/db.js'
import router from './route/userRoute.js';
import adminRoute from './route/adminRoute.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(cors());
const port = 9000;
DBconnect();
app.use('/img',express.static('uploads'))
app.use('/api',router)
app.use('/api',adminRoute)
app.listen(port,()=>{
  console.log("✅ server is working");
})