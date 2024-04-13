const mongoose = require('mongoose');
const { Schema } = mongoose;

const FormSchema = new Schema({
    sno:{
        type: Number,
        require:true
    },
    name:{
        type: String,
        require:true

    },
    father_husband_name:{
        type: String,
        require:true
    },
    dob:{
        type: Date,
        require:true
    },
    membership_no:{
        type: Number,
        // require:true
    },
    res_address:{
        type: String,
        // require:true
    },
    res_taluk:{
        type: String,
        // require:true
    },
    res_district:{
        type: String,
        // require:true
    },
    per_address:{
        type: String,
        // require:true
    },
    per_taluk:{
        type: String,
        // require:true
    },
    per_district:{
        type: String,
        // require:true
    },
    family_details:{
        type: String,
        // require:true
    },
    phoneNo:{
        type: Number,
        require:true
    },
    aadharno:{
        type: Number,
        require:true
    },
    fee:{
        type: Number,
        // require:true
    },
    amountpaid:{
        type: Number,
        // require:true
    },
  });

  module.exports = mongoose.model('form',FormSchema);