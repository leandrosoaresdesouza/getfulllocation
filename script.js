function getPosition() {
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    document.getElementById("latitude").innerHTML = "latitude" + latitude;
    document.getElementById("longitude").innerHTML = "longitude" + longitude;

    document.getElementById("demo").innerHTML = "Hello World";
  });
}
