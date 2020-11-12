const path = require('path');
const router = require('express').Router();


//this has one job and its to respod with an HTML pagr in browser
//using the"/" in get it makes the index page the root of the app
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  
  //this route will take us to the animals page. 
  router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });
  
  router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });
  
  module.exports = router;
