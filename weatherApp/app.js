const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const Weather = document.querySelector("#weather");

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
    console.log(data);
  Weather.innerHTML = `
    <div>
          <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="img" />
        </div>
        <div>
          <h2>${data.main.temp} ℃</h2>
          <h5>clear</h5>
        </div>
    `;
};

form.addEventListener("submit", function (event) {
  console.log(search.value);
  event.preventDefault();
});
