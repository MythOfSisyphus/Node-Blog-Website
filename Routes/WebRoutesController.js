const { Blogs } = require('../DataBase/BlogSchema')

module.exports.create_get = (req, res) => {
    res.render('CreateBlog')
}

module.exports.create_post = async (req, res) => {
    console.log(req.body);
    const { title, author, blogbody  } = req.body;
    let NewBlog = await Blogs.create({ title, author, blogbody });
    res.status(200).json({ yeah: NewBlog })
}

module.exports.allblogs_get = async (req, res) => {
    let AllBlogs = await Blogs.find().sort({createdAt: -1});
    res.render('AllBlogs', { Blogs: AllBlogs });
}

module.exports.deleteBlog_get = (req, res) => {
    Blogs.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) {
            res.redirect('/allblogs')
        }
        else {
            console.log('Failed to delete user Details: ', err)
        }
    })
}