function getAutocomplete(userInputId, acId) {

    document.getElementById(userInputId).addEventListener("keyup", function(e) {
        var userInput = document.getElementById(userInputId).value;
        sendInputToRequestWords(userInput, acId);


    });

    function sendInputToRequestWords(userInput, acId) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                var departureArray = JSON.parse(request.responseText);

                var departureDiv = document.getElementById(acId);
                departureDiv.innerHTML = '';

                departureArray.forEach(function(word) {
                    departureDiv.innerHTML += '<p class="" onclick="fillInput(\'' + word + '\',\''+userInputId+'\',\''+acId+'\')">' + word + '</p>';

                });

            }
        };
        request.open("GET", "/autocomplete/" + userInput, true);
        request.send();

    }
}

function fillInput(word, userInputId, acId) {
    document.getElementById(acId).innerHTML ='';
    document.getElementById(userInputId).value = word;
}


getAutocomplete('from','fromautocomplete');
getAutocomplete('to', 'toautocomplete');
