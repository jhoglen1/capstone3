const express = require('express');

const app = express();

//const bodyParser = require('body-parser');




//const {workout} = require('./public/app');

app.use(express.static('public'));

//app.get('/cyclingWorktout', (req, res) => {
  //res.json(workout.get());
//});



if (require.main === module) {
    app.listen(process.env.PORT || 8080, function() {
      console.info(`App listening on ${this.address().port}`);
    });
  }
  
  module.exports = app;
  