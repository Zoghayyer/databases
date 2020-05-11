var models = require('../models');

module.exports = {

  messages: {
    post: function (req, res) {
      var body = '';
      req.on('data', function(data) {
        body += data;
      });
      req.on('end', function(data) {
        var params = [req.body.username,
        req.body.message,
        req.body.roomname];

        models.messages.post(params, function(err, results) {
          if (err) {
            throw error;
            console.log('Error Posting to Server: ', err);
          }
          res.sendStatus(201);
        });

      });
    }
  },
  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { console.log('get controller: error'); }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results ) {
        if (err) {
          console.log('Error Posting to Server: ', err);
        }
        res.sendStatus(201);
        
      });
    }
  }
};

