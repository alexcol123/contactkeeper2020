const express = require("express");
const router = express.Router();

// @route   GET api/contants
//@desc     Get all users contacts
//@access   Private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route   POST api/contants
//@desc     Add new contacts
//@access   Private

router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route   GET api/contants/:id
//@desc     Update contact
//@access   Private

router.put("/:id", (req, res) => {
  res.send(`Update contact ${id}`);
});

// @route   DELETE  api/contants/:id
//@desc     Delete contact
//@access   Private

router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
