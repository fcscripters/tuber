document.getElementById("from").addEventListener("keyup", function(e) {
  var userInput = document.getElementById("from").value;
  sendInputToRequestWords(userInput);
});

function sendInputToRequestWords(userInput) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      console.log(request.responseText);
      var departureArray = JSON.parse(request.responseText);

      var departureDiv = document.getElementById('fromautocomplete');
      departureDiv.innerHTML = '';

      departureArray.forEach(function(word){
        departureDiv.innerHTML += '<p class="acword" onclick="fillInput(\''+word+'\')">'+word+'</p>';

      });

    }
  };
  request.open("GET", "/autocomplete/" + userInput, true);
  request.send();
}

function fillInput(word){
  console.log(word);
   document.getElementById('from').value = word;
}
