var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.post('/login', function(req,res,next){
  addToDB(req,res);
});

async function addToDB(req,res){

  var user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: User.hashPassword(req.body.password),
    creation_date:Date.now()
  });
  try{
    doc = await user.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.status(501).json(err);
  }
}

router.post('/login1',function(req,res,next){
  
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(err); }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);
});


module.exports = router;
