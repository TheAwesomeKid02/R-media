if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const peopleRouter = require('./routes/people');

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected to DataBase'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ limited: '10mb', extended: false }));

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/people', peopleRouter);

app.listen(process.env.PORT || 3000);