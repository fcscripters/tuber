var journeyButton = document.getElementById('journeyButton');

journeyButton.addEventListener('click', function() {
            var departureStation = document.getElementById('from').value;
            departureStation = departureStation+'%20Underground%20Station';
            var arrivalStation = document.getElementById('to').value;
            arrivalStation = arrivalStation+'%20Underground%20Station';
            console.log(departureStation);

            var request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                if (request.readyState === 4) {


                }
			};
            request.open('GET', '/journey/'+departureStation+'/'+arrivalStation, true);
            request.send();



});
