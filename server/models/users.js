/* const mongoose = require('mongoose') */

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.log('Error connecting to MongoDB Atlas:', err));

/* const UserSchema = new mongoose.Schema({
    name: String,
    email:String,
    age:Number
})

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel */