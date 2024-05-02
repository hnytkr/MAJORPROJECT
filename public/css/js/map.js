
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    
    center: [77.5619, 32.1024], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
