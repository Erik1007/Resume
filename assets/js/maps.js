        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                center: new google.maps.LatLng(59.334591, 18.063240),
                zoom: 5,
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUV";

            var locations = [
                {lat: 68.4301, lng: 18.1254},
                {lat: 60.0971, lng: 19.9348},
                {lat: 45.9238, lng: 6.8693}
            ];

            var markers = location.map(function(location, i) {
                return new google.maps.Marker({
                    position: location, 
                    label: labels[i % labels.length]
                });
            });
        }