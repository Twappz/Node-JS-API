// We import mongoose
const mongoose = require('mongoose');
// Database connection function
const dbConnection = async() => {
try {

// We connect to our database and add some configuration
await 
mongoose.connect(process.env.DB_CN, {
useNewUrlParser: true,
useUnifiedTopology: true
});
console.log('DB Online');
} catch (error) {
console.log(error);
throw new Error('Database Error');
}
}
module.exports = {
dbConnection
}