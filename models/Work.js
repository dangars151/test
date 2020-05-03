var mongoose = require('./connectDB');

var WorkSchema = mongoose.Schema({
    name: String
})

var WorkModel = mongoose.model("work", WorkSchema);

module.exports = WorkModel;