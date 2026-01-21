// select HTML elements in the document
const town = document.querySelector('#town');
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#graphic');
const captionDesc = document.querySelector('#description');
const temp1 = document.querySelector('#temperature1');
const weatherIcon1 = document.querySelector('#graphic1');
const captionDesc1 = document.querySelector('#description1');
const temp2 = document.querySelector('#temperature2');
const weatherIcon2 = document.querySelector('#graphic2');
const captionDesc2 = document.querySelector('#description2');
const temp3 = document.querySelector('#temperature3');
const weatherIcon3 = document.querySelector('#graphic3');
const captionDesc3 = document.querySelector('#description3');
const date1 = document.querySelector('#date1');
const date2 = document.querySelector('#date2');
const date3 = document.querySelector('#date3');

const myKey = "bae20e7f77623889026de14be4b6011a"
const myLat = "35.621042820088945"
const myLong = "-117.6730495255976"

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`
const myForcast = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`

async function apiFetchCurrent() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayCurrentWeather(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetchCurrent();


function displayCurrentWeather(data) {
  town.innerHTML = data.name
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  captionDesc.textContent = `${desc}`;
}

async function apiFetchForcast() {
  try {
    const response = await fetch(myForcast);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetchForcast();

function displayForecast(data) {
  date1.innerHTML = `${data.list[1].dt_txt}`;
  temp1.innerHTML = `${data.list[1].main.temp}&deg;F`;
  const iconsrc1 = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;
  let desc1 = data.list[1].weather[0].description;
  weatherIcon1.setAttribute('src', iconsrc1);
  weatherIcon1.setAttribute('alt', data.list[1].weather[0].description);
  captionDesc1.textContent = `${desc1}`;

  date2.innerHTML = `${data.list[9].dt_txt}`;
  temp2.innerHTML = `${data.list[9].main.temp}&deg;F`;
  const iconsrc2 = `https://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png`;
  let desc2 = data.list[9].weather[0].description;
  weatherIcon2.setAttribute('src', iconsrc2);
  weatherIcon2.setAttribute('alt', data.list[9].weather[0].description);
  captionDesc2.textContent = `${desc2}`;

  date3.innerHTML = `${data.list[17].dt_txt}`;
  temp3.innerHTML = `${data.list[17].main.temp}&deg;F`;
  const iconsrc3 = `https://openweathermap.org/img/wn/${data.list[17].weather[0].icon}@2x.png`;
  let desc3 = data.list[17].weather[0].description;
  weatherIcon3.setAttribute('src', iconsrc3);
  weatherIcon3.setAttribute('alt', data.list[17].weather[0].description);
  captionDesc3.textContent = `${desc3}`;
  
}