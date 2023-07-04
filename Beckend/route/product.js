const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
router.get('/', async (req,res)=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/fooGood", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        const collection = mongoose.connection.collection('foogoods');

        // Retrieve all documents in the collection
        const data = await collection.find().toArray();
    
        // Convert the data to the desired format (e.g., JSON, CSV, etc.)
        // Here, we're assuming we want to export as JSON
        const jsonData = JSON.stringify(data);
    
        // Set the appropriate headers for the response
        res.setHeader('Content-disposition', 'attachment; filename=data.json');
        res.setHeader('Content-type', 'application/json');
    
        // Send the exported data as the response
        res.send(jsonData);
    
    }catch(err){
        console.error(err);
        res.status(500).json({err:"Internal server error"})
    }
})
module.exports=router;