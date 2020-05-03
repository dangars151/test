var mongoose = require('./connectDB');

var CompanySchema = mongoose.Schema({
    name: String,
    website: String,
    description: String,
    image: String,
    email: String,
    location: String
})

var CompanyModel = mongoose.model("company", CompanySchema);

module.exports = CompanyModel;