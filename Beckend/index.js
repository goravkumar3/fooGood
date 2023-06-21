const db=require('./db')
const express=require('express')
db();
var app = express()
const port=5000;
app.use('/api/auth',require('./route/auth'))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
