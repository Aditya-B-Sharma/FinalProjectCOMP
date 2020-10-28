let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -35.2777, lng: 149.1185},
    zoom: 16,
  });
}