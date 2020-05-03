var mongoose = require('./connectDB');

var CVSchema = mongoose.Schema({
    user_id: {
        type: String,
        ref: 'user'
    },
    job_id: {
        type: String,
        ref: 'job'
    },
    company_id: {
        type: String,
        ref: 'company'
    },
    file: String,
    status: Number
})

var CVModel = mongoose.model("cv", CVSchema);

module.exports = CVModel;