var mongoose = require('./connectDB');

var NotificationSchema = mongoose.Schema({
    title: String,
    user_id: {
        type: String,
        ref: 'user'
    },
    company_id: {
        type: String,
        ref: 'company'
    },
    is_read: Number,
    job_id: {
        type: String,
        ref: 'job'
    },
    created_at: Date,
    type: Number
})

var NotificationModel = mongoose.model("notification", NotificationSchema);

module.exports = NotificationModel;