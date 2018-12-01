const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const path = require('path');
//require('dotenv').config()
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
// Routes requires
const user = require('./routes/api/user');
// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Sessions
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);
//cors issue
// app.use(function (req, res) {
//   res.header('Access-Control-Allow-Origin', 'https://*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// })

// app.get('/meetups', function (req, res, next) {
//   console.log(res)
// });

// app.options('*', cors());

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(express.static('public'));
}

// Routes
app.use('/user', user);

app.get('/auth/github', passport.authenticate('github'), function (req, res) { });
app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/account');
  }
);

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
