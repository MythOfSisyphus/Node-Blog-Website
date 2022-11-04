const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please Enter the Title'],
        minlength: [3, 'Minimum Title length should be 3']
    },
    author: {
        type: String,
        required: [true, "Please Enter the Author's Name"],
        minlength: [3, 'Minimum Name length should be 3']
    },
    blogbody: {
        type: String,
        required:[true, 'Please Enter the Content of the Blog'],
        minlength: [50, 'Minimum blog length should be 20']
    }
}, { timestamps: true });

const Blogs = mongoose.model('Blogs', BlogSchema);

module.exports = { Blogs };