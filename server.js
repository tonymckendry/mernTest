//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./model/comments');
var Gpio = require('onoff').Gpio

var led1 = new Gpio(4, 'out')
var led2 = new Gpio(17, 'out')
var led3 = new Gpio(27, 'out')
var led4 = new Gpio(22, 'out')
var led5 = new Gpio(5, 'out')
var led6 = new Gpio(6, 'out')
var led7 = new Gpio(18, 'out')
var led8 = new Gpio(23, 'out')
var led9 = new Gpio(24, 'out')
var led10 = new Gpio(25, 'out')
var led11 = new Gpio(12, 'out')
var led12 = new Gpio(16, 'out')

var turnOn1=()=>{
  led1.writeSync(1)
  setTimeout(()=>{
    led2.writeSync(1)
  }, 50)
  setTimeout(()=>{
    led3.writeSync(1)
  }, 100)
  setTimeout(()=>{
    led4.writeSync(1)
  }, 150)
  setTimeout(()=>{
    led5.writeSync(1)
  }, 200)
  setTimeout(()=>{
    led6.writeSync(1)
  }, 250)
  setTimeout(()=>{
    led7.writeSync(1)
  }, 300)
  setTimeout(()=>{
    led8.writeSync(1)
  }, 350)
  setTimeout(()=>{
    led9.writeSync(1)
  }, 400)
  setTimeout(()=>{
    led10.writeSync(1)
  }, 450)
  setTimeout(()=>{
    led11.writeSync(1)
  }, 500)
  setTimeout(()=>{
    led12.writeSync(1)
  }, 550)
  setTimeout(()=>{
    turnOff1()
  }, 600)
}

var turnOff1=()=>{
  led1.writeSync(0)
  setTimeout(()=>{
    led2.writeSync(0)
  }, 50)
  setTimeout(()=>{
    led3.writeSync(0)
  }, 100)
  setTimeout(()=>{
    led4.writeSync(0)
  }, 150)
  setTimeout(()=>{
    led5.writeSync(0)
  }, 200)
  setTimeout(()=>{
    led6.writeSync(0)
  }, 250)
  setTimeout(()=>{
    led7.writeSync(0)
  }, 300)
  setTimeout(()=>{
    led8.writeSync(0)
  }, 350)
  setTimeout(()=>{
    led9.writeSync(0)
  }, 400)
  setTimeout(()=>{
    led10.writeSync(0)
  }, 450)
  setTimeout(()=>{
    led11.writeSync(0)
  }, 500)
  setTimeout(()=>{
    led12.writeSync(0)
  }, 550)
  setTimeout(()=>{
    turnOn2()
  }, 600)
}

var turnOn2=()=>{
  led12.writeSync(1)
  setTimeout(()=>{
    led11.writeSync(1)
  }, 50)
  setTimeout(()=>{
    led10.writeSync(1)
  }, 100)
  setTimeout(()=>{
    led9.writeSync(1)
  }, 150)
  setTimeout(()=>{
    led8.writeSync(1)
  }, 200)
  setTimeout(()=>{
    led7.writeSync(1)
  }, 250)
  setTimeout(()=>{
    led6.writeSync(1)
  }, 300)
  setTimeout(()=>{
    led5.writeSync(1)
  }, 350)
  setTimeout(()=>{
    led4.writeSync(1)
  }, 400)
  setTimeout(()=>{
    led3.writeSync(1)
  }, 450)
  setTimeout(()=>{
    led2.writeSync(1)
  }, 500)
  setTimeout(()=>{
    led1.writeSync(1)
  }, 550)
  setTimeout(()=>{
    turnOff2()
  }, 600)
}

var turnOff2=()=>{
  led12.writeSync(0)
  setTimeout(()=>{
    led11.writeSync(0)
  }, 50)
  setTimeout(()=>{
    led10.writeSync(0)
  }, 100)
  setTimeout(()=>{
    led9.writeSync(0)
  }, 150)
  setTimeout(()=>{
    led8.writeSync(0)
  }, 200)
  setTimeout(()=>{
    led7.writeSync(0)
  }, 250)
  setTimeout(()=>{
    led6.writeSync(0)
  }, 300)
  setTimeout(()=>{
    led5.writeSync(0)
  }, 350)
  setTimeout(()=>{
    led4.writeSync(0)
  }, 400)
  setTimeout(()=>{
    led3.writeSync(0)
  }, 450)
  setTimeout(()=>{
    led2.writeSync(0)
  }, 500)
  setTimeout(()=>{
    led1.writeSync(0)
  }, 550)
}

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//db config -- REPLACE USERNAME/PASSWORD WITH YOUR OWN FROM MLAB!
mongoose.connect('mongodb://<DBUSERNAME>:<DBPASSWORD>@ds019836.mlab.com:19836/bryandb');

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  console.log('hit the route')
  var vi = setInterval(()=>{
    turnOn1()
  }, 2400)


  // Stop blinking the LED and turn it off after 5 seconds.
  setTimeout(function() {
      clearInterval(vi)
      led1.writeSync(0);  // Turn LED off.
      led1.unexport();    // Unexport GPIO and free resources
      led2.writeSync(0);  // Turn LED off.
      led2.unexport();    // Unexport GPIO and free resources
      led3.writeSync(0);  // Turn LED off.
      led3.unexport();    // Unexport GPIO and free resources
      led4.writeSync(0);  // Turn LED off.
      led4.unexport();    // Unexport GPIO and free resources
      led5.writeSync(0);  // Turn LED off.
      led5.unexport();    // Unexport GPIO and free resources
      led6.writeSync(0);  // Turn LED off.
      led6.unexport();    // Unexport GPIO and free resources
      led7.writeSync(0);  // Turn LED off.
      led7.unexport();    // Unexport GPIO and free resources
      led8.writeSync(0);  // Turn LED off.
      led8.unexport();    // Unexport GPIO and free resources
      led9.writeSync(0);  // Turn LED off.
      led9.unexport();    // Unexport GPIO and free resources
      led10.writeSync(0);  // Turn LED off.
      led10.unexport();    // Unexport GPIO and free resources
      led11.writeSync(0);  // Turn LED off.
      led11.unexport();    // Unexport GPIO and free resources
      led12.writeSync(0);  // Turn LED off.
      led12.unexport();    // Unexport GPIO and free resources
  }, 12000)
  res.json({ message: 'API Initialized!'});
});

//adding the /comments route to our /api router
router.route('/comments')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Comment.find(function(err, comments) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(comments)
    });
  })
  //post new comment to the database
  .post(function(req, res) {
    var comment = new Comment();
    (req.body.author) ? comment.author = req.body.author : null;
    (req.body.text) ? comment.text = req.body.text : null;

    comment.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment successfully added!' });
    });
  });

//Adding a route to a specific comment based on the database ID
router.route('/comments/:comment_id')
//The put method gives us the chance to update our comment based on the ID passed to the route
  .put(function(req, res) {
    Comment.findById(req.params.comment_id, function(err, comment) {
      if (err)
        res.send(err);
      //setting the new author and text to whatever was changed. If nothing was changed
      // we will not alter the field.
      (req.body.author) ? comment.author = req.body.author : null;
      (req.body.text) ? comment.text = req.body.text : null;
      //save comment
      comment.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Comment has been updated' });
      });
    });
  })
  //delete method for removing a comment from our database
  .delete(function(req, res) {
    //selects the comment by its ID, then removes it.
    Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
      if (err)
        res.send(err);
      res.json({ message: 'Comment has been deleted' })
    })
  });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
