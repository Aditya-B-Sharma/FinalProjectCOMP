let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -35.2777, lng: 149.1185},
    zoom: 16,
  });
  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });
}

function placeMarker(location) {
   var marker = new google.maps.Marker({
       position: location, 
       map: map
   });
}
// var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
// var mapOptions = {
//   zoom: 4,
//   center: myLatlng
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!"
// });

// // To add the marker to the map, call setMap();
// marker.setMap(map);



// function initMap() {
//   const myLatlng = { lat: -25.363, lng: 131.044 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: myLatlng,
//   });
//   const marker = new google.maps.Marker({
//     position: myLatlng,
//     map,
//     title: "Click to zoom",
//   });
//   map.addListener("center_changed", () => {
//     // 3 seconds after the center of the map has changed, pan back to the
//     // marker.
//     window.setTimeout(() => {
//       map.panTo(marker.getPosition());
//     }, 3000);
//   });
//   marker.addListener("click", () => {
//     map.setZoom(8);
//     map.setCenter(marker.getPosition());
//   });
// }