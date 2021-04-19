
// -----------------------CITY SEARCHED - START---------------------------
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#cityInput")
  
  let city = `${cityInputElement.value}`;
  search(city);
  
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${cityInputElement.value}`;
}
// -----------------------CITY SEARCHED - END-----------------------------


// ------------------------WEATHER - START-------------------------
function search(city) {
//let apiKey = `5dfba870a40b01cf133df877aa1ba73c`;
//let apiKey = `ddd171aefc6b29bd1446140fe7811783`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);

apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showForecast);
}

let celsiusTemperature = null;

function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  
  console.log("hi");
  celsiusTemperature = repsonse.data.main.temp;
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  
  let cityElement = document.querySelector("h2");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("h3");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humdity;

  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = response.data.main.pressure;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;

  let gustElement = document.querySelector("#gust");
  gustElement.innerHTML = response.data.wind.gust;

  let tempMaxElement = document.querySelector("#max");
  tempMaxElement.innerHTML = response.data.main.temp_max;

  let tempMinElement = document.querySelector("#min");
  tempMinElement.innerHTML = response.data.main.temp_min;

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description);

  let dateElement = document.querySelector("h1");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
// -----------------------WEATHER - END------------------------


// -----------------------FORECAST - START----------------------
function showForecast(response) {
  let forecastElement = document.querySelector(".forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = repsonse.data.list[index];
    forecastElement.innerHTML += `
    <div class="col-2">
      <h4>${formatHours(forecast.dt * 1000)}</h4>
      <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"; alt="weather icon" />
      <div>${Math.round(forecast.main.temp)}</div>;
    </div>
    `

  }
}
// -----------------------FORECAST - END------------------------------


// -----------------------DATE - START-------------------------
function formatDate(timestamp) {
  let now = new Date(timestamp);

  
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let day = days[now.getDay()];
  
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let month = months[now.getMonth()];
  
  let date = now.getDate();
  
  let year = now.getFullYear();
  
  return `${day} ${month} ${date}, ${year} @ ${formatHours(timestamp)}`;
}

function formatHours(timestamp) {
  let now = new Date(timestamp)
  
  let hour = now.getHours();
  if (hour < 10 ) {
    hour = `0${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`
  }
  
  return `${hour}:${minute}`;
}
// -----------------------DATE - END-----------------


// -----------------------TEMPERATURE CONVERSION - START------------------
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("Click", displayFahrenheitTemperature);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}


let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("Click", displayCelsiusTemperature);

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

search("New York");




console.log("oh hello");