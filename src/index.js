
// ----------------------MAIN DATE SECTION - START---------------
let now = new Date();

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];

let date = now.getDate();

let year = now.getFullYear();

let currentDate = `${day} ${month} ${date}, ${year}`

let today = document.querySelector(".today");
today.innerHTML = `${currentDate}`
// -----------------------MAIN DATE SECTION - END-----------------

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
}



//let apiKey = `a293c24d2c990fb6e2eb0ee4dacc8fe9`;
let city = "Seoul";

let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiurl).then(showTemperature);


//response.data.main.humidity
//response.data.main.temp
//response.data.main.temp_max
//response.data.main.temp_min
//response.data.main.name
//response.data.weather.description
//repsonse.data.weather.icon
//response.data.wind.speed
//response.data.coord.dt
//response.data.coord.id