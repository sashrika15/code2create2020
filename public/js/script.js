mapboxgl.accessToken = 'pk.eyJ1IjoiZ2l6bW9jbGFyZGluIiwiYSI6ImNrN2cweWphYjA4c2ozZnBoem4xZXE0aGEifQ.baCX86GsMCWYHESCaq00PA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gizmoclardin/ck7iudrwv681g1ip8cvyxfbpk',
    center: [79.15823221206665, 12.97120831559555],
    zoom: 3
});

var points = [];

axios.get('/getdata')
    .then((response) => {
        console.log(response);
        points = response.data;
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        points.forEach(function (marker) {

            var el = document.createElement('div');
            el.className = 'marker';

            new mapboxgl.Marker(el)
                .setLngLat(marker.coordinates)
                .setPopup(new mapboxgl.Popup({
                        offset: 25
                    }) // add popups
                    .setHTML('<h3>' + marker.title + '</h3><p>' + marker.description + '</p>'))
                .addTo(map);
        });
    });