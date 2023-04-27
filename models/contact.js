const mongoose = require("mongoose");

const Contact = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    unique: true,
  },
  last_name: {
    type: String,
    required: false,
    unique: false,
  },
  mobile_no: {
    type: Number,
    required: true,
    unique: true,
  },
  email_id: {
    type: String,
    required: false,
    unique: false,
  },
  dob: {
    type: String,
    required: false,
    unique: false,
  },
});

const ContactList = mongoose.model("ContactList", Contact);

module.exports = ContactList;
