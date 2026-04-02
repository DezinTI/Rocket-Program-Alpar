

const cardEl = document.querySelector(".card");
const iconEl = document.querySelector(".icon");
const temEl = document.querySelector("h2");
const feelsLikeEl = document.querySelector(".feels-like span");
const humidityEl = document.querySelector(".humidity span");
const tempMinEl = document.querySelector(".min");
const tempMaxEl = document.querySelector(".max");
const windImgEl = document.querySelector(".wind img");
const windTextEl = document.querySelector(".wind span");
const inputEl = document.querySelector(".input input");
const buttonEl = document.querySelector(".input button");

async function callApi() {
    try{
    const city = inputEl.value || 'São Paulo';
    const response = await fetch(
        
    )
    const data = await response.json()
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
            iconEl.src = iconUrl;

            temEl.innerHTML = Math.round(data.main.temp);
            tempMaxEl.innerHTML = Math.round(data.main.temp_max);
            tempMinEl.innerHTML = Math.round(data.main.temp_min);
            feelsLikeEl.innerHTML = Math.round(data.main.feels_like);
            humidityEl.innerHTML = data.main.humidity.toLocaleString();
            windTextEl.innerHTML = data.wind.speed.toLocaleString();

            windImgEl.style.transform = `rotate(${data.wind.deg}deg)`

            cardEl.classList.add("active");
        } catch (err){
            console.log(err);
            cardEl.classList.remove("active");
        }
}

buttonEl.addEventListener("click", callApi);

callApi();