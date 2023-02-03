var cityName = document.getElementById('city-name');
var spot = document.getElementById('spot');
var currentDegrees = document.getElementById('current-temp');
var wind = document.getElementById('wind-speed')
var humid = document.getElementById('humidity')
// Added all Five-Day variables. Could not use for loop due to API data 
// in 3-hour increments.
var day1 = document.getElementById('day1')
var emoji1 = document.getElementById('emoji1')
var temp1 = document.getElementById('temp1')
var wind1 = document.getElementById('wind1')
var humidity1 = document.getElementById('humidity1')
var day2 = document.getElementById('day2')
var emoji2 = document.getElementById('emoji2')
var temp2 = document.getElementById('temp2')
var wind2 = document.getElementById('wind2')
var humidity2 = document.getElementById('humidity2')
var day3 = document.getElementById('day3')
var emoji3 = document.getElementById('emoji3')
var temp3 = document.getElementById('temp3')
var wind3 = document.getElementById('wind3')
var humidity3 = document.getElementById('humidity3')
var day4 = document.getElementById('day4')
var emoji4 = document.getElementById('emoji4')
var temp4 = document.getElementById('temp4')
var wind4 = document.getElementById('wind4')
var humidity4 = document.getElementById('humidity4')
var day5 = document.getElementById('day5')
var emoji5 = document.getElementById('emoji5')
var temp5 = document.getElementById('temp5')
var wind5 = document.getElementById('wind5')
var humidity5 = document.getElementById('humidity5')

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

// This starts Day 2.
var day2Date = dayjs(data.list[16].dt_txt).format("M/D/YYYY")
      day2.innerText = day2Date 
      
      var emojiSign2 = data.list[16].weather[0].main
      emoji2.innerText = getEmoji(emojiSign2)

      var tempDay2 = data.list[16].main.temp
      temp2.innerText = "Temp: " + tempDay2 + "°F"

      var windDay2 = data.list[16].wind.speed
      wind2.innerText = "Wind: " + windDay2 + " MPH"

      var humidDay2 = data.list[16].main.humidity
      humidity2.innerText = "Humidity: " + humidDay2 + " %"

      // This starts Day 3.
      var day3Date = dayjs(data.list[24].dt_txt).format("M/D/YYYY")
      day3.innerText = day3Date 
      
      var emojiSign3 = data.list[24].weather[0].main
      emoji3.innerText = getEmoji(emojiSign3)

      var tempDay3 = data.list[24].main.temp
      temp3.innerText = "Temp: " + tempDay3 + "°F"

      var windDay3 = data.list[24].wind.speed
      wind3.innerText = "Wind: " + windDay3 + " MPH"

      var humidDay3 = data.list[24].main.humidity
      humidity3.innerText = "Humidity: " + humidDay3 + " %"

      // This starts Day 4.
      var day4Date = dayjs(data.list[32].dt_txt).format("M/D/YYYY")
      day4.innerText = day4Date 
      
      var emojiSign4 = data.list[32].weather[0].main
      emoji4.innerText = getEmoji(emojiSign4)

      var tempDay4 = data.list[32].main.temp
      temp4.innerText = "Temp: " + tempDay4 + "°F"

      var windDay4 = data.list[32].wind.speed
      wind4.innerText = "Wind: " + windDay4 + " MPH"

      var humidDay4 = data.list[32].main.humidity
      humidity4.innerText = "Humidity: " + humidDay4 + " %"

      // This starts Day 5.
      var day5Date = dayjs(data.list[39].dt_txt).format("M/D/YYYY")
      day5.innerText = day5Date 
      
      var emojiSign5 = data.list[39].weather[0].main
      emoji5.innerText = getEmoji(emojiSign5)

      var tempDay5 = data.list[39].main.temp
      temp5.innerText = "Temp: " + tempDay5 + "°F"

      var windDay5 = data.list[39].wind.speed
      wind5.innerText = "Wind: " + windDay5 + " MPH"

      var humidDay5 = data.list[39].main.humidity
      humidity5.innerText = "Humidity: " + humidDay5 + " %"


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



