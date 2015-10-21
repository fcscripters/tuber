var journeyButton = document.getElementById('journeyButton')

journeyButton.addEventListener('click', function() {
            var from = document.getElementById('from').value
            var to = document.getElementById('to').value
            console.log('BOOM', from, to);
            var request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                if (request.readyState === 4) {



                }
			}
            request.open('GET', '/journey/'+from+'/'+to, true)
            request.send();



})
