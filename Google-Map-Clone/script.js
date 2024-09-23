mapboxgl.accessToken =
  "pk.eyJ1IjoiYXNsaWRkaW4yMDAyIiwiYSI6ImNreG0xMzFsYzA4dGIydmp2bDBvcXZzYTIifQ.QD_x4_zt5IpEuGJ7x0D1Pg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
  setupMap([41.3238636, 69.2429745]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: [-74.5, 40],
    zoom: 11,
    center: center,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "top-right");

  const direction = new MapboxDirections({ accessToken: mapboxgl.accessToken });
  map.addControl(direction, "top-left");
}
