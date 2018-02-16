function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);
	var weatherData = []

	this.getWeather = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			callWhenDone(res);
			weatherData.push(res)
		})
	}
	this.tempConverter = function tempConverter(tempKelvin){
		tempKelvin = [weatherData.main.temp[i],weatherData.main.temp_max[i],weatherData.main.temp_min[i]]
		var tempFahrenheit = []
		tempKelvin.forEach(temp => {
			temp = (temp * 1.8) - 459.67
			tempFahrenheit.push(temp)
		})
	}
}
