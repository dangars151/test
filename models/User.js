var mongoose = require('./connectDB');

var UserSchema = mongoose.Schema({
    email: String,
    password: String,
    role: String,
    fullname: String,
    image: String,
    description: String,
    companyId: {
        type: String,
        ref: 'company'
    },
    birthday: Date,
    mobile: String
})

var UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;