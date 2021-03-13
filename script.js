function getPosition() {
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    fetch("https://perguntea2020.herokuapp.com/mail", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        latitude,
        longitude,
      }),
    }).then((response) => {
      console.log("response", response);
    });

    document.getElementById("latitude").innerHTML = "latitude" + latitude;
    document.getElementById("longitude").innerHTML = "longitude" + longitude;
  });
}
