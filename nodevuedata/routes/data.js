var express = require('express');
var router = express.Router();
// var userModel = require("../model/user")
var activityModel =require('../model/activity')
var positionModel =require('../model/position')
var productsModel = require("../model/products")



// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.redirect('/index')
// });

router.get('/product', function(req, res, next) {
    //res.send("reseave");
    productsModel.find().then(result=>{
        res.send(result)
    })
})

router.get('/productdetail', function(req, res, next) {
    //res.send("reseave");
    productsModel.findById(req.query.id).then(result=>{
	res.send(result)
})
})

router.get('/product1list', function(req, res, next) {
    //res.send("reseave");
    activityModel.find(
	    {
	    	activitypositionID:"5c4f05cc93691a08347d0020"
	    }
		
    	).then(result=>{	
    	console.log(result)
        res.send(result)
    })
})

router.get('/product2list', function(req, res, next) {
    //res.send("reseave");
    activityModel.find(
	    {
	    	activitypositionID:"5c4f05ed93691a08347d0021"
	    }
		
    	).then(result=>{	
    	console.log(result)
        res.send(result)
    })
})

router.get('/product3list', function(req, res, next) {
    //res.send("reseave");
    activityModel.find(
	    {
	    	activitypositionID:"5c4f062893691a08347d0022"
	    }
		
    	).then(result=>{	
    	console.log(result)
        res.send(result)
    })
})


module.exports = router;
