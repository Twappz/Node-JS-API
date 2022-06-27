To test in a local environment using Postman
POST http://localhost:3000/api/user/
GET http://localhost:3000/api/user/
GET http://localhost:3000/api/user/:userId
PUT http://localhost:3000/api/user/: userId
DELETE http://localhost:3000/api/user/:userId

app.use(bodyParser.urlencoded({extended: true}));

name
email
age