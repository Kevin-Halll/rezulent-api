const mongoose = require('mongoose');

Company = new mongoose.Schema({
    company_name: {type: String, require: true},
    about_company: [String],
    company_logo: {type: String, require: true},
    address: {type: String},
    email: {type: String},
    phone_number: {type: String, required: true},
    password: {type:String, required:true},
})

module.exports = mongoose.model('Company', Company);