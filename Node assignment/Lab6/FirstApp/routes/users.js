var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const Rx = require('rxjs/Rx');

/* GET users listing. */
router.get('/', function (req, res, next) {

  /*fetch('http://jsonplaceholder.typicode.com/users/')
    .then(res=>res.json())
    .then(json=>{console.log(json)
      res.render('user/users', { users: json });
    }
  
  ).catch(e=>{
    console.log("Error");
    res.render('error',{error:err, msg:"can't load URL"});
  });*/
  //Using observable

  /*result.subscribe(data=>{
    res.render('user/users', { users: data });
  })*/
  //Observable fromPromise
  /*var result = Rx.Observable.fromPromise(fetch('http://jsonplaceholder.typicode.com/users/'));
  result.subscribe(x => console.log(x), e => console.error(e));*/

  //use Promise
  var reader = function readData() {
    return new Promise(function (resolve, reject) {
      fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
        .then(json => resolve(json)).catch(e => reject(e));
    })
  }
  /*reader().then(data=>res.render('user/users', { users: data })).catch(e=>res.render('error',{error:err, msg:"can't load URL"}))
  var result = new Rx.Observable.create(ob=>{
    fetch('http://jsonplaceholder.typicode.com/users/')
    .then(res=>res.json())
    .then(json=>ob.next(json));
  });*/

  async function checkerAsync() {
    try {
      let result = await reader();
      res.render('user/users', { users: result });
    }
    catch (err) {
      res.render('error', { error: err, msg: "can't load URL" });
    }
  }
  checkerAsync();
  //res.send('respond with a resource');
});

module.exports = router;
