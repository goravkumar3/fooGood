const connecttoMango=require('./db');
const express = require('express')
connecttoMango();
const app = express()
const port = 5000
app.use(express.json())
app.use('/api/auth/',require('./route/auth'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})