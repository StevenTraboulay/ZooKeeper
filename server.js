const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
//added  a file path to locate our application info in the public folder and make these static resources
app.use(express.static('public'));
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
//method build into express.js takes incoming POST data and convers it tokey/value pairings that can be accessed by req.body
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
