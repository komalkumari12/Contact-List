const contactController = require("../controller/contact");
const express = require("express");
const router = express.Router();

router.post("/addContact", contactController.addContact);
router.get("/getAllContacts", contactController.getAllContacts);
router.get("/getContactsById/:id", contactController.getContactsById);
router.put("/updateContactById/:id", contactController.updateContactById);
router.delete("/deleteContact/:id", contactController.deleteContact);

module.exports = router;
