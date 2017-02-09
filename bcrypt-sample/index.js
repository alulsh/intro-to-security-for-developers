var bcrypt = require('bcrypt');
var password = 'supersecurepassword'
var saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
    console.log('The password is ' + password + ' with ' + saltRounds + ' salt rounds');
    console.log('The password hash is ' + hash);

    // Compare password to the hash in your database
    bcrypt.compare(password, hash, function(err, res) {
        // res should be "true"
        console.log(res);
    });

    // Compare a bad password to what's in your database
    bcrypt.compare('not my actual password', hash, function(err, res) {
        // res should be "false"
        console.log(res);
    });

});