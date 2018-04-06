var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function (req, res, next) {

  fetch('http://jsonplaceholder.typicode.com/users/')
    .then(res=>res.json())
    .then(json=>{console.log(json)
      res.render('user/users', { users: json });
    }
  
  );
  
  //res.send('respond with a resource');
});

module.exports = router;
