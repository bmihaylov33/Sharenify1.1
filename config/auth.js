// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '450516641960632', // your App ID
        'clientSecret'    : '9b1c80e81062805e9d7da03643796455', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '581483099704-971t6rfahv5rh28bjnn8pcp1op8g06l3.apps.googleusercontent.com',
        'clientSecret'     : '4duA9KrBFiO1_LaDau_dPisa',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
