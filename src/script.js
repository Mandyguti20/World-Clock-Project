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

//Current Time Element
let currentTime  = document.querySelector(".current-time");
let currentDate = document.querySelector(".current-date");
let currentTimeFormat = moment().tz(`America/New_York`);
let currentAmPmElement = document.querySelector("#am-pm");
currentDate.innerHTML = currentTimeFormat.format("dddd, MMMM Do, YYYY");
currentTime.innerHTML = `${currentTimeFormat.format("h:mm")}`;
currentAmPmElement.innerHTML = currentTimeFormat.format("a");

}

updateTime();
setInterval(updateTime, 1000)