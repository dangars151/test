var mongoose = require('./connectDB');

var JobSchema = mongoose.Schema({
    title: String,
    name: String,
    salary_from: Number,
    salary_to: Number,
    out_date: Date,
    created_at: Date,
    description: String,
    status: Number,
    companyId: {
        type: String,
        ref: 'company'
    },
    workId: {
        type: String,
        ref: 'work'
    }
})

var JobModel = mongoose.model("job", JobSchema);

module.exports = JobModel;