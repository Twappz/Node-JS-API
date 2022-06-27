const { Schema, model } = require('mongoose');
// We define the schema
const UserSchema = Schema({
// User’s Name
name: {
type: String,
required: true
},
// User’s Email
email: {
type: String,
required: true,
unique: true
},
// User’s Age
age: {
type: String,
required: true
}
}, {
// This allows us to see the creation and update date.
timestamps: true
});
// We Export the user for future use
module.exports = model('User', UserSchema);