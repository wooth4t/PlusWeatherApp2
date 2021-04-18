
// ----------------------MAIN DATE & TIME SECTION - START---------------
let now = new Date();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];

let date = now.getDate();

let year = now.getFullYear();

let hour = now.getHours();
if (hour < 10 ) {
 hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`
}

let currentDate = `${day} ${month} ${date}, ${year}  ${hour}:${minute}`;

let today = document.querySelector(".today");
today.innerHTML = `${currentDate}`
// -----------------------MAIN DATE & TIME SECTION - END-----------------

// -----------------------CITY SEARCHED - START--------------------
function searched(event) {
  event.preventDefault();
  let input =  document.querySelector("#enterCity");
  let inputResult = document.querySelector("h2");
  inputResult.innerHTML = (input.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", searched);
// -----------------------CITY SEARCHED - END----------------------

console.log("hi")
console.log("oh hello");


// ------------------------WEATHER - START-------------------------
function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatuerElement.innerHTML = Math.round(celsiusTemperature);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humdity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;

  let tempMaxElement = document.querySelector("max");
  tempMaxElement.innerHTML = response.data.main.temp_max;

  let tempMinElement = document.querySelector("min");
  tempMinElement.innerHTML = response.data.main.temp_min;


}



//let apiKey = `a293c24d2c990fb6e2eb0ee4dacc8fe9`;
let city = "Seoul";

let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiurl).then(showTemperature);


//repsonse.data.weather.icon
// wind gust
//response.data.coord.dt
//response.data.coord.id