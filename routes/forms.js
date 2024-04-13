const express = require("express");
const router = express.Router();
const Form = require("../models/Form");
const { body, validationResult } = require("express-validator");

// get all forms
router.get("/form", async (req, res) => {
  try {
    const form = await Form.find();
    res.json(form);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// create form
router.post(
  "/form",
  [
    body("phoneNo", "Enter a valid Phone Number").isLength({ min: 10, max: 10 }),
    body("aadharno", "Aadhar Number must be of 12 characters").isLength({
      min: 12,
      max: 12,
    }),
  ],
  async (req, res) => {
    try {
      const { sno,
        name,
        father_husband_name,
        dob,
        membership_no,
        res_address,
        res_taluk,
        res_district,
        per_address,
        per_taluk,
        per_district,
        family_details,
        phoneNo,
        aadharno,
        fee,
        amountpaid } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const form = new Form({
        sno,
        name,
        father_husband_name,
        dob,
        membership_no,
        res_address,
        res_taluk,
        res_district,
        per_address,
        per_taluk,
        per_district,
        family_details,
        phoneNo,
        aadharno,
        fee,
        amountpaid
      });
      const savedForm = await form.save();

      res.json({ "success": true,data:savedForm});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Delete form
router.delete("/form/:id", async (req, res) => {
  try {
    let form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).send("Not found");
    }
    form = await Form.findByIdAndDelete(req.params.id);
    res.json({ "Success": "Form has been deleted", form: form });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;