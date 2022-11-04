const { Blogs } = require('../DataBase/BlogSchema')

function ErrorHandler(err) {
    // console.log(err.message);

    let errors = {title: '', author: '', blogbody: ''};

    if(err.message.includes('Blogs validation failed')) {
        // console.log(err.errors)

        // console.log(Object.values(err.errors));
        Object.values(err.errors).forEach(item => {
            // console.log(item.properties.path)
            // console.log(item.properties.message)

            errors[item.properties.path] = item.properties.message;
        })
    }

    return errors;
}

module.exports.create_get = (req, res) => {
    res.render('CreateBlog')
}

module.exports.create_post = async (req, res) => {

    console.log(req.body);
    const { title, author, blogbody } = req.body;

    try {
        let NewBlog = await Blogs.create({ title, author, blogbody });
        res.status(200).json({ yeah: NewBlog })
    }
    catch(err) {
        let errors = ErrorHandler(err)
        res.status(400).json({errors})
    }
}

module.exports.allblogs_get = async (req, res) => {
    let AllBlogs = await Blogs.find().sort({ createdAt: -1 });
    res.render('AllBlogs', { Blogs: AllBlogs });
}

module.exports.deleteBlog_get = (req, res) => {
    Blogs.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/allblogs')
        }
        else {
            console.log('Failed to delete user Details: ', err)
        }
    })
}