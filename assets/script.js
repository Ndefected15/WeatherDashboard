var locationInput = document.querySelector("#city");
var searchInput = document.querySelector("#search");

var getCurrentWeather = async (event) => {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value.trim()}&appid=2cbf1a9e40ee9174bee7a4b6e1685a82`;
  event.preventDefault();
  const res = await fetch(apiUrl);
  let data = await res.json();
  console.log(data);
  drawWeather(data);
};

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);

  // document.getElementById("description").innerHTML = d.weather[0].description;

  document.getElementById("location").innerHTML = d.name;
  document.getElementById("temp").innerHTML = fahrenheit + "&deg;";
  document.getElementById("wind").innerHTML = d.wind.speed;
  document.getElementById("humidity").innerHTML = d.main.humidity;
  // document.getElementById("UV").innerHTML = d.
}

// window.onload = function () {
// getCurrentWeather(6167865);
//};

searchInput.addEventListener("submit", getCurrentWeather);
