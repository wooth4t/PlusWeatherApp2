
// MAIN DATE SECTION - START
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
// MAIN DATE SECTION - END

// CITY SEARCHED - START
function searched(event) {
  event.preventDefault();
  let input =  document.querySelector("#enterCity");
  let inputResult = document.querySelector("h2");
  inputResult.innerHTML = (input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", searched);
// CITY SEARCHED - END

console.log("hi")
console.log("oh hello");


// WEATHER - START
function showTemperature(response) {
  console.log(response.data[0].title);
}


let apiurl = `https://jsonpalceholder.typicode.com`;
axios.get(apiurl).then(showTemperature);

