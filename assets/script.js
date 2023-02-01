var cityName = document.getElementById('city-name');
var location = document.getElementById('location');

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
   location.innerHTML(city)
    var urlAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=9674a6a8f4915aca684dd5788eec83bf"

    fetch(urlAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
    })
}



document.querySelector(".btn").addEventListener('click', saveCityName)



