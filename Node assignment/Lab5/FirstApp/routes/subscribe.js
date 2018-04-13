var express = require('express');
var router = express.Router();

router.get('/',function(req, res){
    console.log("asdasdas");
    res.render('subscribe/index', { title: 'Subscribe' });
})
router.get('/:task_id',function(req, res, next){
    res.end(`Id is ${req.params.task_id}`);
    res.render('subscribe/index', { title: 'Subscriber',csrf: req.csrfToken() });
})
module.exports = router;