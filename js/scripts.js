let map;
let startmarker;
let endmarker;
let markers = [];

let startlistener;
let endlistener;
let normlistener;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -35.2777, lng: 149.1185},
    zoom: 16,
  });

}

async function placeMarker(location, type) {
   if (type == "start"){
     console.log("start");
     var smarker = new google.maps.Marker({
      position: location,
      map: map,
    });
    smarker.setIcon('https://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    startmarker = smarker;
    return;
   }
   if (type == "end"){
    console.log("end");
    var emarker = new google.maps.Marker({
      position: location,
      map: map,
    });
    emarker.setIcon('https://maps.google.com/mapfiles/ms/icons/green-dot.png');
    endmarker = emarker;
    return;
   } else {
    console.log("norm");
    var marker = new google.maps.Marker({
      position: location,
      map: map,
    });
    marker.setIcon('https://maps.google.com/mapfiles/ms/icons/red-dot.png');
    markers.push(marker);
    return;
   }
}

function shortestpath(){
  // ask user to input 2 points
  // startpoint();
  startnode();
  setTimeout(() => {  endnode(); }, 1000);
  setTimeout(() => {  normnode(); }, 2000);
  
  // ask user to input all inbetween points
  // get hull points
}

function startnode(){
  startlistener = google.maps.event.addListener(map, 'click', function(event) {
    console.log("reached start");
    placeMarker(event.latLng, "start");
    google.maps.event.removeListener(startlistener);
  });
}

function endnode(){
  console.log("reached end");
  endlistener = google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng, "end");
    google.maps.event.removeListener(endlistener);
  });
}

function normnode(){
  console.log("reached norm");
  normlistener = google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng, "norm");
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