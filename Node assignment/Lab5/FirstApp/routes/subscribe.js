var express = require('express');
var router = express.Router();
router.get('/',function(){
    console.log("asdasdas");
    res.render('subscribe/index', { title: 'Subscribe' });
})
module.exports = router;