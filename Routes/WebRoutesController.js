const { Blogs } = require('../DataBase/BlogSchema');

const { User } = require('../DataBase/UserSchema');

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

function AuthError(err) {
    console.log(err.message, err.code);

    let errors = { NameVal: '', EmailVal: '', PasswordVal: '' };

    // console.log(err.errors);

    // console.log(Object.values(err.errors))

    if(err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(item => {
            // console.log(item.properties.path)
            // console.log(item.properties.mes)

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

// login
module.exports.login_get = (req, res) => {
    res.render('login')
}

module.exports.login_post = (req, res) => {
    console.log(req.body);
    res.json(req.body)
}

module.exports.signup_get = (req, res) => {
    res.render('signup')
}

module.exports.signup_post = async (req, res) => {
    console.log(req.body);

    const { NameVal, EmailVal, PasswordVal } = req.body;

    try {
        let NewUser = await User.create({ NameVal, EmailVal, PasswordVal });
        res.json({account: NewUser})
    }
    catch(err) {
        let errors = AuthError(err);
        res.status(400).json({errors})
    }

}