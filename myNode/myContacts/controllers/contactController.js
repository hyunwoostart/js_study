const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
// Get /contacts

const getAllContacts = asyncHandler (async (req, res) => {
        console.log(req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone ) {
            return res.send("필수 값이 입력되지 않았습니다.");
        } 

        const contact = await Contact.create({
            name, 
            email, 
            phone
        });
        res.send('Create contacts');
});

// Create contact
// POST /contacts
const createContact =  asyncHandler (async (req, res) => {
    res.send('Contacts Page');
});

module.exports = { getAllContacts, createContact };