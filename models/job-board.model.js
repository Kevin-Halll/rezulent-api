const mongoose = require('mongoose');

const Schema = mongoose.Schema;
Jobs = new Schema({
    companyID:{type:Schema.Types.ObjectId, ref: "Company"},
    jobTitle: {type: String, require: true},
    location: {type: String, require: true},
    employmentType: {type: String},
    shiftType: {type: String},
    salary: {type: String, default: "Not Stated"},
    jobDescription: {type:[String]},
    duties: {type:[String]},
    requirements: {type:[String]},
    qualifications: {type:[String]},
})

module.exports = mongoose.model('Jobs', Jobs);