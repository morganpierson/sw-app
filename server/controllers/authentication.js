const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../../config');

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp}, config.secret) 
}

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function(err, user) {
    if(err) {
      return next(err);
    }
    if(!email || !password) {
      return res.status(422).send({ error: 'email and password must be provided' })
    }
    if(user) {
      return res.status(422).send({ error: 'email already in use' })
    }
    else {
      const user = new User({
        email: req.body.email,
        password: req.body.password
      })

      user.save(function(err) {
        if(err) {
          return next(err);
        }

        res.send({ token: tokenForUser(user) })
      })
    }
  })
}

exports.signin = function(req, res, next) {
  res.send({ token: tokenForUser(req.user) })
}