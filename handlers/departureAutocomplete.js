var fs =require('fs');
var index = fs.readFileSync(__dirname + '/../public/index.html');
var ac = require('../js/autocomplete.js');

module.exports = function departureAutocomplete(req, res, match) {

  var userInput = match.params.userInput;
  var correctInput = ac.toTitleCase(userInput);


  ac.import(function(err, words) {
    ac.findWord(correctInput, function(err, found) {

      console.log(found);

      res.write(JSON.stringify(found));
      res.end();

    });
  });



};
