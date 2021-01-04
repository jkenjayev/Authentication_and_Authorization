const mongoose = require("mongoose");
const Joi = require("joi");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 8
    }
});

const User = mongoose.model("User", schema);

async function validateUser(user) {
    const schema = {
        name: Joi.string().required().min(4),
        password: Joi.string().required().min(8),
        email: Joi.string().email().required().min(8)
    }

    return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validateUser;