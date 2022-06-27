const bodyParser = require("body-parser");
// Express is the package that we installed for creating our server
const express = require('express');
// We import the .env file
require('dotenv').config();


// connect to the database
require('./database/config').dbConnection();

// Express App
const app = express();
// JSON Body Parsing
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// Node Server
const server = require('http').createServer(app);
// We initialize the node server
app.use('/api/user', require('./routes/users'));
server.listen(process.env.PORT, (err) => {
if (err) throw new Error(err);
console.log('Server running on port:', process.env.PORT);
});

