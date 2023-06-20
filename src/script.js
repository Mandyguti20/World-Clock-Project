function updateTime () {
//Los Angeles Time Element

let losAngeles = document.querySelector("#los-angeles");
let losAngelesDate = losAngeles.querySelector(".city-date");
let losAngelesTime = losAngeles.querySelector(".city-time");
let losAngelesTimeFormat = moment().tz(`America/Los_Angeles`);
losAngelesDate.innerHTML = losAngelesTimeFormat.format("dddd, MMMM Do, YYYY"); 
losAngelesTime.innerHTML = `${losAngelesTimeFormat.format("h:mm:ss")}
<small>${losAngelesTimeFormat.format("a")}</small>`;

//Tokyo Time Element
let tokyo = document.querySelector("#tokyo");
let tokyoDate = tokyo.querySelector(".city-date");
let tokyoTime = tokyo.querySelector(".city-time");
let tokyoTimeFormat = moment().tz(`Asia/Tokyo`);
tokyoDate.innerHTML = tokyoTimeFormat.format("dddd, MMMM Do, YYYY");
tokyoTime.innerHTML = `${tokyoTimeFormat.format("h:mm:ss")}
<small>${tokyoTimeFormat.format("a")}</small>`;

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split('/')
    [1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div>
    <h3>${cityName}</h3>
    <h1 class="current-time">${cityTime.format("h:mm")} <small>${cityTime.format("a")}</small></h1>
    <h4 class="current-date">${cityTime.format("dddd, MMMM Do, YYYY")}</h5>
    </div>
    `;
}

function UpdateCurrentTime() {
//Current Time Element
let currentTime  = document.querySelector("#cities");
let currentTimeFormat = moment().tz(`America/New_York`);
currentTime.innerHTML = `
<div>
<h1 class="current-time">${currentTimeFormat.format("h:mm")} <small>${currentTimeFormat.format("a")}</small></h1>
<h4 class="current-date">${currentTimeFormat.format("dddd, MMMM Do, YYYY")}</h5>
</div>
`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000)
UpdateCurrentTime();
setInterval(UpdateCurrentTime, 60000);
