function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')
	var kelvinTemp 
	var isFahrenheit = true

	weatherService.getWeather(drawWeather)

	function drawWeather(res){
		kelvinTemp = res.main.temp
		if(isFahrenheit == false){
			var temp = weatherService.celsiusConverter(kelvinTemp);
			var tempSymbol = '°C'
		}else{
			var temp = weatherService.fahrenheitConverter(kelvinTemp);
			var tempSymbol = '°F'
		}
		template = `
		<div class='weather'>
				<i class="action fas fa-cloud" onclick="app.controllers.weatherController.toggleTemp()"></i>
				<p>${temp} ${tempSymbol}</p>
				<p>${res.name}</p>
		</div>
		`
		weatherElem.innerHTML = template
	}
	this.toggleTemp = function toggleTemp(){
		isFahrenheit = !isFahrenheit
		weatherService.getWeather(drawWeather)
	}

}
