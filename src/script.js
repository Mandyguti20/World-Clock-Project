//Los Angeles Time Element

let losAngeles = document.querySelector("#los-angeles");
let losAngelesDate = losAngeles.querySelector(".city-date");
let losAngelesTime = losAngeles.querySelector(".city-time");
let losAngelesTimeFormat = moment();
losAngelesDate.innerHTML = losAngelesTimeFormat.format("dddd, MMMM Do, YYYY"); 
losAngelesTime.innerHTML = `${losAngelesTimeFormat.format("h:mm:ss")}
<small>${losAngelesTimeFormat.format("A")}</small>`;

//New York Time Element
let newYork = document.querySelector("#new-york");
let newYorkDate = newYork.querySelector(".city-date");
let newYorkTime = newYork.querySelector(".city-time");
let newYorkTimeFormat = moment();
newYorkDate.innerHTML = newYorkTimeFormat.format("dddd, MMMM Do, YYYY");
newYorkTime.innerHTML = `${newYorkTimeFormat.format("h:mm:ss")}
<small>${newYorkTimeFormat.format("A")}</small>`;
