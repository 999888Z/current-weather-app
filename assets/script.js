var cityName = document.getElementById('city-name');
var spot = document.getElementById('spot');
var currentDegrees = document.getElementById('current-temp');
var wind = document.getElementById('wind-speed')
var humid = document.getElementById('humidity')
var day1 = document.getElementById('day1')
var emoji1 = document.getElementById('emoji1')
var temp1 = document.getElementById('temp1')
var wind1 = document.getElementById('wind1')
var humidity1 = document.getElementById('humidity1')

function saveCityName(event) {
    var city = cityName.value
    var latLongFinder = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName.value + "&appid=9674a6a8f4915aca684dd5788eec83bf"
    
    
    fetch(latLongFinder)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      var lat = data[0].lat
      var lon = data[0].lon
      getWeatherData(lat, lon, city)
    })


}

function getWeatherData(lat, lon, city) {
   
    var urlAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&exclude=hourly&units=imperial&appid=9674a6a8f4915aca684dd5788eec83bf"

    fetch(urlAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // This is the current day
      console.log(data)
      var emojiSign = data.list[0].weather[0].main

      var currentDate = dayjs(data.list[0].dt_txt).format(" (M/D/YYYY)")
      spot.innerText = city + currentDate + getEmoji(emojiSign)
      var currentTemp = data.list[0].main.temp
      currentDegrees.innerText = "Temp: " + currentTemp + "°F"

      var windSpeed = data.list[0].wind.speed
      wind.innerText = "Wind: " + windSpeed + " MPH"

      var humidity = data.list[0].main.humidity
      humid.innerText = "Humidity: " + humidity + " %"

// This is the beginning of the 5-Day Forecast
var day1Date = dayjs(data.list[8].dt_txt).format("M/D/YYYY")
      day1.innerText = day1Date 
      
      var emojiSign1 = data.list[8].weather[0].main
      emoji1.innerText = getEmoji(emojiSign1)

      var tempDay1 = data.list[8].main.temp
      temp1.innerText = "Temp: " + tempDay1 + "°F"

      var windDay1 = data.list[8].wind.speed
      wind1.innerText = "Wind: " + windDay1 + " MPH"

      var humidDay1 = data.list[8].main.humidity
      humidity1.innerText = "Humidity: " + humidDay1 + " %"

    })

    function getEmoji(emojiSign){
      if(emojiSign === "Clouds"){
        return "☁️"
      } 
      else if(emojiSign === "Clear"){
        return "☀️"
      }
      else if(emojiSign === "Snow"){
        return "❄️"
      }
      else if(emojiSign === "Rain"){
        return "🌧️"
      }
      else if(emjoiSign === "Drizzle"){
        return "🌦️"
      }
      else {
        return "⛈️"
      }
      
    }
}



document.querySelector(".btn").addEventListener('click', saveCityName)



