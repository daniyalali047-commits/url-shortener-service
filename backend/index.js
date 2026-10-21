import express from 'express';
import {nanoid} from 'nanoid'
import connectDB from './src/config/mongo.config.js';
const app = express();

const PORT = 3000;

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/api/create" , (req , resp)=>{
    const {url} = req.body
    console.log(url)
    resp.send(nanoid(9))
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
