const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isemail');

const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    NameVal: {
        type: String,
        required: [true, 'Please Enter your name'],
        minlength: [3, 'Minimum Title length should be 3']
    },
    EmailVal: {
        type: String,
        required: [true, 'Please Enter your email'],
        validate: [isEmail, 'Please Enter a valid email.']
    },
    PasswordVal: {
        type: String,
        required: [true, 'Please Enter password'],
        minlength: [6, 'Minimum Password length should be 6']
    },
}, { timestamps: true })

// hashing password before saving to db
UserSchema.pre('save', async function(next) {
    let salt = await bcrypt.genSalt();
    this.PasswordVal = await bcrypt.hash(this.PasswordVal, salt);
    next()
})

UserSchema.statics.login = async function(EmailVal, PasswordVal) {
    const user = await this.findOne({ EmailVal });
    if(user) {
        let auth = await bcrypt.compare(PasswordVal, user.PasswordVal)
        if(auth) {
            return user;
        }
        throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const User = mongoose.model('User', UserSchema);

module.exports = { User }