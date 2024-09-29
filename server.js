import 'dotenv/config'

import express from "express"
const app = express()
const PORT = process.env.PORT || 3000



app.get('/', (req, res)=>{
    return res.send('hi everyone')
})

app.listen(PORT , ()=> console.log(`port is ranning ${PORT} `))