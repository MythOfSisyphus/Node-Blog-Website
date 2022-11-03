const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    author: {
        type: String,
        required: true,
        minlength: 3
    },
    blogbody: {
        type: String,
        required: true,
        minlength: 3
    }
}, { timestamps: true });

const Blogs = mongoose.model('Blogs', BlogSchema);

module.exports = { Blogs };