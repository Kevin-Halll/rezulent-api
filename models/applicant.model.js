const mongoose = require('mongoose');

const Schema = mongoose.Schema;
Applicant = new Schema({
    firstName: {type: String, require: true},
    lastName: {type:String, required:true},
    phoneNumber: {type: String, require: true},
    email: {type: String},
    gender: {type: String},
    resume: {type: String, require: true},
    resume_grade: {type:Number},
    jobAdvertId: {type:Schema.Types.ObjectId},
})

module.exports = mongoose.model('Applicant', Applicant);