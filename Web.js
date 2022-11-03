const express = require('express');

const morgan = require('morgan')

const app = express();

app.use(morgan('dev'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.send('Hello world! This is my blog website.')
    res.render('Home')
})

app.listen(3000, () => {console.log(`server running...`);})