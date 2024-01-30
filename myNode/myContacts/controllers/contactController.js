const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.render("getAll");
});

// Create contact
// POST /contacts /add
const createContact = asyncHandler(async (req, res) => {
    //
})