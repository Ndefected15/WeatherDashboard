var locationInput = document.querySelector("#city");
var searchInput = document.querySelector("#search");

function getCurrentWeather(city) {
  "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2cbf1a9e40ee9174bee7a4b6e1685a82`
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      console.log(data);
    })
    .catch(function () {
      // catch any errors
    });
}

// window.onload = function () {
// getCurrentWeather(6167865);
//};

searchInput.addEventListener("submit", getCurrentWeather);
