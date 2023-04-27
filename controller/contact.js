const contactList = require("../models/contact");

exports.addContact = async (req, res) => {
  try {
    console.log(req.body);

    const ContactDetails = await contactList.create(req.body);

    return res.status(200).json({
      message: ContactDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const ContactDetails = await contactList.find({});

    return res.status(200).json({
      message: ContactDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getContactsById = async (req, res) => {
  try {
    const { id } = req.params;
    const ContactDetails = await contactList.findById(id);

    return res.status(200).json({
      message: ContactDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const ContactDetails = contactList.findByIdAndUpdate(id, req.body, {
      new: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const ContactDetails = await contactList.findByIdAndDelete(id);

    return res.status(200).json({
      message: ContactDetails,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
