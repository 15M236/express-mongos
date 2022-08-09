var express = require('express');
var router = express.Router();
var {dbUrl, dbName, mongodb,mongoClient} = require('./../dbSchema');
const mongoose = require('mongoose');
const {userDetails,foodDetails} = require('./../Schema');

mongoose.connect(dbUrl);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get-food',async(req,res)=>{
  try{
    let foods = await foodDetails.find();
    res.send({
      statusCode: 200,
      data : foods 
    })
  }catch(error){
    console.log(error)
    res.send({
      statusCode: 500,
      error
    })
  }
})

router.get('/get-user',async(req,res)=>{
  try{
    let users = await userDetails.find();
    res.send({
      statusCode: 200,
      data : users 
    })
  }catch(error){
    console.log(error)
    res.send({
      statusCode: 500,
      error
    })
  }
})

router.post('/add-user',async(req,res)=>{
  try{
    let users = await userDetails.create(req.body);
    res.send({
      statusCode: 200,
      message : "User added successfully"
    })
  }catch(error){
    console.log(error)
    res.send({
      statusCode: 500,
      error
    })
  }
})

router.post('/add-food',async(req,res)=>{
  try{
    let foods = await foodDetails.create(req.body);
    res.send({
      statusCode: 200,
      message : "Food has been created"
    })
  }catch(error){
    console.log(error)
    res.send({
      statusCode: 500,
      error
    })
  }
})

router.put('/update-user/:id',async(req,res)=>{
  try{
    let users = await userDetails.updateOne({_id:mongodb.ObjectId(req.params.id)},req.body)
    res.send({
      statusCode: 200,
      message : "User updated successfully"
    })
  }catch(error){
    console.log(error)
    res.send({
      statusCode: 500,
      
    })
  }
})

router.delete('/delete-user/:id',async(req,res)=>{
  try{
    let users = await userDetails.deleteOne({_id:mongodb.ObjectId(req.params.id)})
    res.send({
      statusCode: 200,
      message : "User Deleted successfully"
    })
  }catch(error){
    console.log(error)
    res.send({
      statusCode: 500,
      
    })
  }
})
module.exports = router;
