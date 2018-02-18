function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(drawQuote)

	function drawQuote(res){
		template = `<p>${res.quote}<b id='author'> - ${res.author}</b></p>`
		quoteElem.innerHTML = template
	}
}
