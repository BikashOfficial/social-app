const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Connect to MongoDB
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Invalid email address.'
        }
    },
    username:{
        type: String,
        required: true,
        unique: true,
    },
    bio: {
        type: String,
        default: ''
    },
    // avatar: {
    //     type: String,
    //     default: 'https://placekitten.com/100/100'
    // },
    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'post'
    // }],
    // followers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // }],
    // following: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // }],
    // notifications: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'notification'
    // }],
    // chats: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'chat'
    // }],
    // date: {
    //     type: Date,
    //     default: Date.now
    // },
    // privacy:{
    //     type: String,
    // },
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;