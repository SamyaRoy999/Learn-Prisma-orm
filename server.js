import 'dotenv/config';

import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;



// middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    return res.send('hi everyone');
})

// ** routes file

import routes from "./routes/index.js";

app.use(routes);

app.listen(PORT , ()=> console.log(`port is ranning ${PORT} `));