var express = require('express');
var router = express.Router();
var session = require('express-session');
var csrf = require('csurf');

router.use(session({
    secret: 'session_secretOIFHDLKSJFKHBILHRY&I'
}));

router.use(csrf());

/*router.use(function(req, res, next) {
  req.locals.csrf = req.csrfToken();
  next();
});*/


router.get('/',function(req, res, next){
    res.render('subscribe/index', { title: 'Subscriber',csrf: req.csrfToken() });
})
router.post('/',function(req, res, next){
    req.assert('email','email must be required').notEmpty().isEmail();
    let errors = req.validationErrors();
    let email = req.body.email;
    if(errors) res.render('subscribe/index', { title: 'Write your email please', csrf: req.csrfToken() });
    else res.render('subscribe/ty', { title: 'Thank you', mail:email });
})
module.exports = router;