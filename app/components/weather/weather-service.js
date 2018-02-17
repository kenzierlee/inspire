function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);
	var weatherData = []

	function Weather(){
		this.tempKelvin = weatherData.main.temp[i]
		this.tempMax = weatherData.main.temp_max[i]
		this.tempMin = weatherData.main.temp_min[i]
	}

	this.getWeather = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			callWhenDone(res);
			console.log(res)
			weatherData.push(res)
		})
	}
	
	this.celsiusConverter = function celsiusConverter(temp){
		var celsiusTemp = (temp-273.15)
		return Math.floor(celsiusTemp)
	}
	this.fahrenheitConverter = function fahrenheitConverter(temp){
		var fahrenheitTemp = (temp * 1.8) - 459.67
		return Math.floor(fahrenheitTemp)
	}
}
