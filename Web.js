const express = require('express');
// Middleware
const morgan = require('morgan')
// mongoose
const mongoose = required('mongoose')
// Getting MongoURI ( I'm not giving my Key you can get yours from MongoDB Atlas )
const { MongoDB_Connection } = require('./Keys/MongoURI')

const app = express();

// using PORT to serve our website otherwise 3000
const PORT = process.env.PORT || 3000;

// connecting to MongoDB Atlas with the help of Mongoose
const URI = MongoDB_Connection;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log(`Connected to MongoDB Atlas...`);
        app.listen(PORT, () => {console.log(`server running on ${PORT}...`);})
    })


// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Setting up view engine
app.set('view engine', 'ejs')

// serving static files like 'js, css that are required for our web pages'
app.use(express.static('Public'))

app.get('/', (req, res) => {
    // res.send('Hello world! This is my blog website.')
    res.render('Home')
})

app.get('/create', (req, res) => {
    res.render('CreateBlog')
})
